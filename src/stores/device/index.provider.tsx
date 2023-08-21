import { useState, useEffect } from 'react';
import { DeviceContext } from './index.context';
import { updateDeviceType } from './index.utils';

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
