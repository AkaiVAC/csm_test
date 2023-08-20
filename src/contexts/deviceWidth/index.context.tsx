import { createContext, useEffect, useState } from 'react';
import { DeviceType } from '../../../types/enums';
import { Theme } from '../../layouts/Theme';

const updateDeviceType = () => {
    const deviceWidth = window.document.documentElement.clientWidth;
    switch (true) {
        case deviceWidth <= Theme.sizes.mobile:
            return DeviceType.Mobile;
        case deviceWidth > Theme.sizes.mobile &&
            deviceWidth < Theme.sizes.tablet:
            return DeviceType.Tablet;
        default:
            return DeviceType.Monitor;
    }
};

export const DeviceContext = createContext<DeviceContextType>({
    deviceType: updateDeviceType(),
    deviceWidth: window.document.documentElement.clientWidth,
});

export const DeviceProvider = ({ children }: { children: React.ReactNode }) => {
    const [deviceWidth, setDeviceWidth] = useState(
        window.document.documentElement.clientWidth
    );
    const [deviceType, setDeviceType] = useState(updateDeviceType());

    useEffect(() => {
        const handleResize = () => {
            setDeviceWidth(window.document.documentElement.clientWidth);
            setDeviceType(updateDeviceType());
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [deviceWidth]);

    const contextValue = {
        deviceType,
        deviceWidth,
    };

    return (
        <DeviceContext.Provider value={contextValue}>
            {children}
        </DeviceContext.Provider>
    );
};
