import { Button } from '../..';
import { ImageCanvasAction, ImageCanvasTool } from '../../../../types/enums';
import { CanvasOptionContainer, OpacityControl } from './index.styles';
import { useCanvasStore } from '../index.hook';

const CanvasOptions = () => {
    const { state, dispatch } = useCanvasStore();
    const { activeTool, pointType, maskOpacity } = state;

    return (
        <CanvasOptionContainer>
            {activeTool === ImageCanvasTool.Erase && (
                <p>
                    <b>Hint:</b>
                    <br />
                    Hover over the points on the image to remove them.
                </p>
            )}

            {activeTool === ImageCanvasTool.Add && (
                <>
                    <Button
                        variant={pointType === 'object' ? 'success' : 'flat'}
                        onClick={() =>
                            dispatch({
                                type: ImageCanvasAction.SET_POINT_TYPE,
                                payload: 'object',
                            })
                        }
                    >
                        Object
                    </Button>
                    <Button
                        variant={pointType === 'background' ? 'danger' : 'flat'}
                        onClick={() =>
                            dispatch({
                                type: ImageCanvasAction.SET_POINT_TYPE,
                                payload: 'background',
                            })
                        }
                    >
                        Background
                    </Button>
                </>
            )}

            {activeTool === ImageCanvasTool.Segment && (
                <OpacityControl>
                    Mask Opacity
                    <input
                        type='range'
                        min='0'
                        max='1'
                        step='0.1'
                        value={maskOpacity}
                        onChange={(e) =>
                            dispatch({
                                type: ImageCanvasAction.SET_MASK_OPACITY,
                                payload: Number(e.target.value),
                            })
                        }
                    />
                </OpacityControl>
            )}
        </CanvasOptionContainer>
    );
};

export default CanvasOptions;
