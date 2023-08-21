import { DeviceType } from '../../../types/enums';
import { Theme } from '../../themes';

export const updateDeviceType = () => {
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
