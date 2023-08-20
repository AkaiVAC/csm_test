import { useEffect } from 'react';
import { Tooltip } from 'react-tooltip';
import { CanvasControlContainer } from './index.styles';
import { Icon } from '../..';
import { ImageAction } from '../../../../types/enums';
import { IconProps } from '../../Icon';
import { useCanvas } from '../index.hook';

const CanvasControls = () => {
    const {
        history,
        setHistory,
        activeTool,
        setActiveTool,
        setPoints,
        setCursorType,
    } = useCanvas();

    useEffect(() => {
        switch (activeTool) {
            case ImageAction.Add:
                setCursorType('crosshair');
                break;
            case ImageAction.Erase:
                setCursorType(`url('icons/eraser.svg'), auto`);
                break;
            case ImageAction.Pan:
                setCursorType('all-scroll');
                break;
        }
    }, [activeTool, setCursorType]);

    const controls: Array<IconProps> = [
        {
            variant: activeTool === ImageAction.Add ? 'flat' : 'outlined',
            src: 'addPoint',
            alt: 'Add point on image',
            onClick: () => setActiveTool(ImageAction.Add),
        },
        {
            variant: 'outlined',
            src: 'undo',
            alt: 'Undo point addition',
            onClick: () => {
                setPoints(history.length ? history.slice(-1)[0] : []);
                setHistory(history.slice(0, -1));
            },
        },
        {
            variant: activeTool === ImageAction.Erase ? 'flat' : 'outlined',
            src: 'erase',
            alt: 'Erase points on image',
            onClick: () => setActiveTool(ImageAction.Erase),
        },
        {
            variant: 'outlined',
            src: 'clear',
            alt: 'Clear all points on image',
            onClick: () => {
                setPoints([]);
                setActiveTool(ImageAction.Add);
            },
        },
        {
            variant: activeTool === ImageAction.Segment ? 'flat' : 'outlined',
            src: 'segmentFrame',
            alt: 'Segment frame from image',
            onClick: () => setActiveTool(ImageAction.Segment),
        },
        {
            variant: activeTool === ImageAction.Pan ? 'flat' : 'outlined',
            src: 'pan',
            alt: 'Pan image',
            onClick: () => setActiveTool(ImageAction.Pan),
        },
    ];

    return (
        <CanvasControlContainer>
            {controls.map(({ variant, src, alt, onClick }, index) => (
                <div key={index}>
                    <Tooltip anchorSelect={`.${src}`} content={alt} />
                    <Icon
                        variant={variant}
                        src={src}
                        alt={alt}
                        onClick={onClick}
                    />
                </div>
            ))}
        </CanvasControlContainer>
    );
};

export default CanvasControls;
