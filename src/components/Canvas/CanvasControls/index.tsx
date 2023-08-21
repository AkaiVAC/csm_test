import { useEffect } from 'react';
import { Tooltip } from 'react-tooltip';
import { CanvasControlContainer } from './index.styles';
import { Icon } from '../..';
import { ImageCanvasTool, ImageCanvasAction } from '../../../../types/enums';
import { IconProps } from '../../Icon';
import { useCanvasStore } from '../../../stores/canvas';

const CanvasControls = () => {
    const { state, dispatch } = useCanvasStore();
    const { activeTool, history, points } = state;

    useEffect(() => {
        switch (activeTool) {
            case ImageCanvasTool.Add:
                dispatch({
                    type: ImageCanvasAction.SET_CURSOR_TYPE,
                    payload: 'crosshair',
                });
                break;
            case ImageCanvasTool.Erase:
                dispatch({
                    type: ImageCanvasAction.SET_CURSOR_TYPE,
                    payload: `url('icons/eraser.svg'), auto`,
                });
                break;
            case ImageCanvasTool.Pan:
                dispatch({
                    type: ImageCanvasAction.SET_CURSOR_TYPE,
                    payload: 'all-scroll',
                });
                break;
        }
    }, [activeTool, dispatch]);

    const controls: Array<IconProps> = [
        {
            variant: activeTool === ImageCanvasTool.Add ? 'flat' : 'outlined',
            src: 'addPoint',
            alt: 'Add point on image',
            onClick: () => {
                dispatch({
                    type: ImageCanvasAction.SET_ACTIVE_TOOL,
                    payload: ImageCanvasTool.Add,
                });
            },
        },
        {
            variant: 'outlined',
            src: 'undo',
            alt: 'Undo previous action',
            onClick: () => {
                dispatch({
                    type: ImageCanvasAction.SET_POINTS,
                    payload: history.length ? history.slice(-1)[0] : [],
                });
                dispatch({
                    type: ImageCanvasAction.SET_HISTORY,
                    payload: history.slice(0, -1),
                });
            },
        },
        {
            variant: activeTool === ImageCanvasTool.Erase ? 'flat' : 'outlined',
            src: 'erase',
            alt: 'Erase points on image',
            onClick: () =>
                dispatch({
                    type: ImageCanvasAction.SET_ACTIVE_TOOL,
                    payload: ImageCanvasTool.Erase,
                }),
        },
        {
            variant: 'outlined',
            src: 'clear',
            alt: 'Clear all points on image',
            onClick: () => {
                dispatch({
                    type: ImageCanvasAction.SET_POINTS,
                    payload: [],
                });
                dispatch({
                    type: ImageCanvasAction.SET_ACTIVE_TOOL,
                    payload: ImageCanvasTool.Add,
                });
                dispatch({
                    type: ImageCanvasAction.SET_HISTORY,
                    payload:
                        history.length >= 1 ? [...history, points] : [points],
                });
            },
        },
        {
            variant:
                activeTool === ImageCanvasTool.Segment ? 'flat' : 'outlined',
            src: 'segmentFrame',
            alt: 'Segment frame from image',
            disabled: Boolean(!points.length),
            onClick: () => {
                dispatch({
                    type: ImageCanvasAction.SET_ACTIVE_TOOL,
                    payload: ImageCanvasTool.Segment,
                });
                dispatch({
                    type: ImageCanvasAction.SET_MASK_OPACITY,
                    payload: 0.5,
                });
            },
        },
        {
            variant: activeTool === ImageCanvasTool.Pan ? 'flat' : 'outlined',
            src: 'pan',
            alt: 'Pan image',
            onClick: () =>
                dispatch({
                    type: ImageCanvasAction.SET_ACTIVE_TOOL,
                    payload: ImageCanvasTool.Pan,
                }),
        },
    ];

    return (
        <CanvasControlContainer>
            {controls.map(({ variant, src, alt, disabled, onClick }, index) => (
                <div key={index}>
                    <Tooltip anchorSelect={`.${src}`} content={alt} />
                    <Icon
                        variant={variant}
                        src={src}
                        alt={alt}
                        disabled={disabled}
                        onClick={onClick}
                        tabIndex={0}
                    />
                </div>
            ))}
        </CanvasControlContainer>
    );
};

export default CanvasControls;
