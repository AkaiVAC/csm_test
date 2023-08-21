import { Tooltip } from 'react-tooltip';
import { Icon, Button } from '../..';
import { DeviceType, ImageCanvasTool } from '../../../../types/enums';
import {
    CanvasHeaderContainer,
    MobileContainer,
    SessionTitle,
    StatusBubble,
} from './index.styles';
import { useCanvasStore } from '../index.hook';
import { useDeviceStore } from '../../../contexts/deviceWidth/index.hook';

const CanvasHeader = () => {
    const deviceStore = useDeviceStore();
    return (
        <CanvasHeaderContainer>
            {deviceStore.deviceType > DeviceType.Mobile && (
                <div>
                    <Tooltip
                        anchorSelect='.chevronLeft'
                        content='Go back'
                        place='right'
                    />
                    <Icon
                        variant='text'
                        src='chevronLeft'
                        alt='back button'
                        width='12'
                        height='12'
                        tabIndex={0}
                    />
                </div>
            )}
            <SessionTitle>
                SESSION_1687955097_5347443
                {deviceStore.deviceType >= DeviceType.Tablet && (
                    <StatusBubble>Real2SimCompleted</StatusBubble>
                )}
            </SessionTitle>
            <MobileContainer>
                <Button
                    variant='flat'
                    icon={{ src: 'download', location: 'left' }}
                    disabled={
                        useCanvasStore().state.activeTool !==
                        ImageCanvasTool.Segment
                    }
                >
                    {deviceStore.deviceType > DeviceType.Tablet && 'Download'}
                </Button>
            </MobileContainer>
        </CanvasHeaderContainer>
    );
};

export default CanvasHeader;
