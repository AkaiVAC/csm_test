import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import {
    ImageCanvasContainer,
    ImageContainer,
    ImageMaskContainer,
    ImagePoint,
} from './index.styles';
import { ImageAction } from '../../../../types/enums';
import { useCanvas } from '../index.hook';

const ImageCanvas = () => {
    const {
        imageContainerRef,
        activeTool,
        cursorType,
        points,
        zoomLevel,
        setIsPanning,
        maskOpacity,
        addPointOnClick,
        removePointOnHover,
        handleZoom,
    } = useCanvas();

    return (
        <ImageCanvasContainer>
            <TransformWrapper
                onInit={(ref) => setTimeout(() => ref.centerView(1, 0), 100)}
                onZoom={handleZoom}
                onPanning={() => setIsPanning(true)}
                onPanningStop={() =>
                    setTimeout(() => {
                        setIsPanning(false);
                    }, 1)
                }
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

                        {activeTool === ImageAction.Segment && (
                            <ImageMaskContainer
                                style={{
                                    opacity: maskOpacity,
                                }}
                            />
                        )}

                        {points.map((point, index) => (
                            <ImagePoint
                                key={index}
                                onMouseOver={() => removePointOnHover(point)}
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
