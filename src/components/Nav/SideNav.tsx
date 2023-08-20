import { Tooltip } from 'react-tooltip';
import { Button, Nav } from '..';
import { DeviceType } from '../../../types/enums';
import { useDeviceStore } from '../../contexts/deviceWidth/index.hook';

const SideNav = () => {
    const { deviceType } = useDeviceStore();

    const contents = [
        {
            src: 'overview',
            content: 'Overview',
        },
        {
            src: 'segmentVideo',
            content: 'Video segmentation',
        },
        {
            src: 'feedback',
            content: 'Submit Feedback',
            toolTipContent: 'Go to feedback page',
            onClick: () => window.open('https://forms.gle/XhCeamGgyiF888w1A'),
        },
    ];

    return (
        <Nav variant='vertical'>
            {contents.map(({ src, content, toolTipContent, onClick }) => (
                <div
                    style={{
                        width:
                            deviceType > DeviceType.Tablet
                                ? '100%'
                                : 'fit-content',
                    }}
                    key={src}
                >
                    <Tooltip
                        anchorSelect={`.${src}`}
                        content={toolTipContent || content}
                        place={
                            deviceType > DeviceType.Mobile ? 'right' : 'bottom'
                        }
                    />
                    <Button
                        variant='sidebar'
                        icon={{ location: 'left', src }}
                        onClick={onClick}
                    >
                        {deviceType > DeviceType.Tablet && content}
                    </Button>
                </div>
            ))}
        </Nav>
    );
};

export default SideNav;
