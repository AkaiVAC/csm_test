import { Tooltip } from 'react-tooltip';
import Nav from '.';
import { Button, Divider } from '..';
import { SideNavContainer } from './index.styles';
import { DeviceType } from '../../../types/enums';
import { useDeviceStore } from '../../contexts/deviceWidth/index.hook';

const SideNav = () => {
    const { deviceType } = useDeviceStore();

    return (
        <SideNavContainer>
            <Nav
                variant={
                    deviceType < DeviceType.Tablet ? 'horizontal' : 'vertical'
                }
            >
                <Tooltip
                    anchorSelect='.overview'
                    content='Overview'
                    place='right'
                />
                <Button
                    data-sds=''
                    variant='sidebar'
                    icon={{ location: 'left', src: 'overview' }}
                >
                    {deviceType > DeviceType.Tablet && 'Overview'}
                </Button>
                <Tooltip
                    anchorSelect='.segmentVideo'
                    content='Video segmentation'
                    place='right'
                />
                <Button
                    variant='sidebar'
                    icon={{ location: 'left', src: 'segmentVideo' }}
                >
                    {deviceType > DeviceType.Tablet && 'Video Segmentation'}
                </Button>
                <Tooltip
                    anchorSelect='.feedback'
                    content='Go to feedback page'
                    place='right'
                />
                <Button
                    variant='sidebar'
                    icon={{ location: 'left', src: 'feedback' }}
                    onClick={() =>
                        window.open('https://forms.gle/XhCeamGgyiF888w1A')
                    }
                >
                    {deviceType > DeviceType.Tablet && 'Submit Feedback'}
                </Button>
            </Nav>
            {deviceType > DeviceType.Mobile && <Divider variant='vertical' />}
        </SideNavContainer>
    );
};

export default SideNav;
