import { useContext } from 'react';
import { DeviceContext } from './index.context';

export const useDeviceStore = () => useContext(DeviceContext);
