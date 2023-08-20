import { Tooltip } from 'react-tooltip';
import { Icon, Button } from '../..';
import { DeviceType, ImageCanvasTool } from '../../../../types/enums';
import { CanvasHeaderContainer, SessionTitle } from './index.styles';
import { useCanvasStore } from '../index.hook';
import { useDeviceStore } from '../../../contexts/deviceWidth/index.hook';

const CanvasHeader = () => (
    <CanvasHeaderContainer>
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
        <SessionTitle>SESSION_1687955097_5347443</SessionTitle>
        <Button
            variant='flat'
            icon={{ src: 'download', location: 'left' }}
            disabled={
                useCanvasStore().state.activeTool !== ImageCanvasTool.Segment
            }
        >
            {useDeviceStore().deviceType > DeviceType.Tablet && 'Download'}
        </Button>
    </CanvasHeaderContainer>
);

export default CanvasHeader;
