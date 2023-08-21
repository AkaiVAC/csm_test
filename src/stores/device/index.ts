import { useContext } from 'react';
import { DeviceContext } from './index.context';

export const useDeviceStore = () => {
    const context = useContext(DeviceContext);
    if (!context) {
        throw new Error(
            'useDeviceContext must be used within a DeviceProvider'
        );
    }
    return context;
};
