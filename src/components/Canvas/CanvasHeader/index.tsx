import { Tooltip } from 'react-tooltip';
import { Icon, Button } from '../..';
import { ImageAction } from '../../../../types/enums';
import { useCanvas } from '../index.hook';
import { CanvasHeaderContainer, SessionTitle } from './index.styles';

const CanvasHeader = () => {
    const { activeTool } = useCanvas();
    return (
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
                />
            </div>
            <SessionTitle>SESSION_1687955097_5347443</SessionTitle>
            <div>
                <Button
                    variant='flat'
                    icon={{ src: 'download', location: 'left' }}
                    disabled={activeTool !== ImageAction.Segment}
                >
                    Download
                </Button>
            </div>
        </CanvasHeaderContainer>
    );
};

export default CanvasHeader;
