import { useEffect, useState } from 'react';
import { DeviceType } from '../../types/enums';
import styled from 'styled-components';

const ResizeableElement = styled.div`
    width: 100%;
    opacity: 0;

    position: fixed;
    inset: 0;
`;

const ResizeObserverComponent = () => {
    const [deviceType, setDeviceType] = useState(DeviceType.Monitor);
    const [deviceWidth, setDeviceWidth] = useState(
        window.document.documentElement.clientWidth
    );

    useEffect(() => {
        const handleResize = () => {
            setDeviceWidth(window.document.documentElement.clientWidth);

            switch (true) {
                case deviceWidth <= 480:
                    setDeviceType(DeviceType.Mobile);
                    break;
                case deviceWidth > 480 && deviceWidth < 720:
                    setDeviceType(DeviceType.Tablet);
                    break;
                default:
                    setDeviceType(DeviceType.Monitor);
                    break;
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [deviceWidth]);

    return (
        <ResizeableElement
            data-device-type={deviceType}
            data-devive-width={deviceWidth}
        />
    );
};

export default ResizeObserverComponent;
