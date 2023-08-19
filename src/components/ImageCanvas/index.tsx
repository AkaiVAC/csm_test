import { SetStateAction, useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { ImageContainer, ImageMaskContainer, ImagePoint } from './index.styles';

const ImageCanvas = () => {
    const [points, setPoints] = useState<Array<{ x: number; y: number }>>([]);
    const [zoomLevel, setZoomLevel] = useState(2);
    const [isPanning, setIsPanning] = useState(false);
    const [maskOpacity] = useState(0);

    const handleClick = (event: React.MouseEvent) => {
        if (isPanning) {
            return;
        }
        const rect = (event.target as HTMLDivElement).getBoundingClientRect();

        const x = (event.clientX - rect.left) / zoomLevel;
        const y = (event.clientY - rect.top) / zoomLevel;
        const newPoint = { x, y };

        setPoints((prevPoints) => [...prevPoints, newPoint]);
    };

    const handleZoom = (newZoomLevel: {
        state: { scale: SetStateAction<number> };
    }) => {
        setZoomLevel(newZoomLevel.state.scale);
    };

    return (
        <TransformWrapper
            initialScale={zoomLevel}
            centerZoomedOut={true}
            onZoom={handleZoom}
            onPanning={() => setIsPanning(true)}
            onPanningStop={() =>
                setTimeout(() => {
                    setIsPanning(false);
                }, 1)
            }
        >
            <TransformComponent>
                <ImageContainer onClick={(e) => handleClick(e)}>
                    <img
                        src='/obj.jpeg'
                        alt='uploaded image'
                        style={{
                            maxHeight: '60vmin',
                        }}
                    />
                    <ImageMaskContainer
                        style={{
                            opacity: maskOpacity,
                        }}
                    />
                    {points.map((point, index) => (
                        <ImagePoint
                            key={index}
                            style={{
                                left: point.x,
                                top: point.y,
                                background: 'red',
                                scale: `${1.25 / zoomLevel}`,
                                width: 10,
                                height: 10,
                            }}
                        />
                    ))}
                </ImageContainer>
            </TransformComponent>
        </TransformWrapper>
    );
};

export default ImageCanvas;
