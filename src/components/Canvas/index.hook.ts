import { SetStateAction, useRef, useState } from 'react';
import { ImageAction } from '../../../types/enums';

export const useCanvas = () => {
    const imageContainerRef = useRef(null);

    const [history, setHistory] = useState<Array<Array<ImagePoint>>>([]);
    const [activeTool, setActiveTool] = useState<ImageAction>(ImageAction.Add);
    const [cursorType, setCursorType] = useState('crosshair');
    const [points, setPoints] = useState<Array<ImagePoint>>([]);
    const [pointType, setPointType] = useState<PointVariant>('object');
    const [zoomLevel, setZoomLevel] = useState(1);
    const [isPanning, setIsPanning] = useState(false);
    const [maskOpacity, setMaskOpacity] = useState(0.5);

    const addPointOnClick = (event: React.MouseEvent) => {
        if (
            !imageContainerRef.current ||
            activeTool !== ImageAction.Add ||
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
        const newPoint = { x, y, type };

        setPoints((prevPoints) => [...prevPoints, newPoint]);
        setHistory([...history, points]);
    };

    const removePointOnHover = (activePoint: ImagePoint) => {
        if (activeTool !== ImageAction.Erase) {
            return;
        }

        setPoints(
            points.filter(
                (point) => JSON.stringify(point) !== JSON.stringify(activePoint)
            )
        );
        setHistory([...history, points]);
    };

    const handleZoom = (newZoomLevel: {
        state: { scale: SetStateAction<number> };
    }) => {
        setZoomLevel(newZoomLevel.state.scale);
    };

    return {
        imageContainerRef,
        history,
        setHistory,
        activeTool,
        setActiveTool,
        cursorType,
        setCursorType,
        points,
        setPoints,
        pointType,
        setPointType,
        zoomLevel,
        setZoomLevel,
        isPanning,
        setIsPanning,
        maskOpacity,
        setMaskOpacity,
        addPointOnClick,
        removePointOnHover,
        handleZoom,
    };
};
