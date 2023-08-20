import { Button } from '../..';
import { ImageAction } from '../../../../types/enums';
import { useCanvas } from '../index.hook';
import { CanvasOptionContainer, OpacityControl } from './index.styles';

const CanvasOptions = () => {
    const { activeTool, pointType, setPointType, maskOpacity, setMaskOpacity } =
        useCanvas();
    return (
        <CanvasOptionContainer>
            <Button
                variant={pointType === 'object' ? 'success' : 'flat'}
                onClick={() => setPointType('object')}
            >
                Object
            </Button>
            <Button
                variant={pointType === 'background' ? 'danger' : 'flat'}
                onClick={() => setPointType('background')}
            >
                Background
            </Button>

            {activeTool === ImageAction.Erase && (
                <p>
                    <b>Hint:</b>
                    <br />
                    Hover over the points on the image to remove them.
                </p>
            )}

            {activeTool === ImageAction.Segment && (
                <OpacityControl>
                    Mask Opacity
                    <input
                        type='range'
                        min='0'
                        max='1'
                        step='0.1'
                        value={maskOpacity}
                        onChange={(e) => setMaskOpacity(Number(e.target.value))}
                    />
                </OpacityControl>
            )}
        </CanvasOptionContainer>
    );
};

export default CanvasOptions;
