import { SetStateAction, useRef } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import {
    ImageCanvasContainer,
    ImageContainer,
    ImageMaskContainer,
    ImagePoint,
} from './index.styles';
import { ImageCanvasAction, ImageCanvasTool } from '../../../../types/enums';
import { useCanvasStore } from '../index.hook';

const ImageCanvas = () => {
    const { state, dispatch } = useCanvasStore();

    const {
        history,
        activeTool,
        cursorType,
        points,
        pointType,
        zoomLevel,
        isPanning,
        maskOpacity,
    } = state;

    const imageContainerRef = useRef(null);

    const addPointOnClick = (event: React.MouseEvent) => {
        if (
            !imageContainerRef.current ||
            activeTool !== ImageCanvasTool.Add ||
            isPanning
        ) {
            return;
        }

        const rect = (
            imageContainerRef.current as HTMLDivElement
        ).getBoundingClientRect();
        const x = (event.clientX - rect.left) / zoomLevel;
        const y = (event.clientY - rect.top) / zoomLevel;
        const type = pointType;

        if (
            points.find(
                (point) => point.x === x && point.y === y && point.type === type
            )
        ) {
            return;
        }

        dispatch({
            type: ImageCanvasAction.SET_POINTS,
            payload: [...points, { x, y, type }],
        });
        dispatch({
            type: ImageCanvasAction.SET_HISTORY,
            payload: history.length >= 1 ? [...history, points] : [points],
        });
    };

    const removePointOnHover = (activePoint: ImagePoint) => {
        if (activeTool !== ImageCanvasTool.Erase) {
            return;
        }

        dispatch({
            type: ImageCanvasAction.SET_POINTS,
            payload: points.filter(
                (point) => JSON.stringify(point) !== JSON.stringify(activePoint)
            ),
        });
        dispatch({
            type: ImageCanvasAction.SET_HISTORY,
            payload: [...history, points],
        });
    };

    const handleZoom = (newZoomLevel: {
        state: { scale: SetStateAction<number> };
    }) => {
        dispatch({
            type: ImageCanvasAction.SET_ZOOM_LEVEL,
            payload: newZoomLevel.state.scale,
        });
    };

    const setIsPanning = (value: boolean) => {
        dispatch({ type: ImageCanvasAction.SET_IS_PANNING, payload: value });
    };

    return (
        <ImageCanvasContainer>
            <TransformWrapper
                onInit={(ref) =>
                    setTimeout(() => ref.centerView(zoomLevel, 500), 500)
                }
                onZoom={handleZoom}
                onPanning={() => setIsPanning(true)}
                onPanningStop={() =>
                    setTimeout(() => {
                        setIsPanning(false);
                    }, 10)
                }
                doubleClick={{ disabled: true }}
            >
                <TransformComponent>
                    <ImageContainer
                        ref={imageContainerRef}
                        onClick={(e) => addPointOnClick(e)}
                        style={{
                            cursor: cursorType,
                        }}
                    >
                        <img
                            src='/obj.jpeg'
                            alt='uploaded image'
                            style={{
                                maxHeight: '60vmin',
                            }}
                        />

                        {activeTool === ImageCanvasTool.Segment && (
                            <ImageMaskContainer
                                style={{
                                    opacity: maskOpacity,
                                }}
                            />
                        )}

                        {activeTool !== ImageCanvasTool.Segment &&
                            points.map((point, index) => (
                                <ImagePoint
                                    key={index}
                                    onMouseOver={() =>
                                        removePointOnHover(point)
                                    }
                                    style={{
                                        left: point.x,
                                        top: point.y,
                                        background: `${
                                            point.type === 'object'
                                                ? 'limegreen'
                                                : 'red'
                                        }`,
                                        scale: `${1.25 / zoomLevel}`,
                                        width: 10,
                                        height: 10,
                                    }}
                                />
                            ))}
                    </ImageContainer>
                </TransformComponent>
            </TransformWrapper>
        </ImageCanvasContainer>
    );
};

export default ImageCanvas;
