import { createContext } from 'react';
import { updateDeviceType } from './index.utils';

export const DeviceContext = createContext<DeviceContextType>({
    deviceType: updateDeviceType(),
    deviceWidth: window.document.documentElement.clientWidth,
});
