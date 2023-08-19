import styled, { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyles, LibStyleOverrides } from './theme';
import { Button, Divider, Header, Icon, SideNav } from '../components';
import {
    CanvasContainer,
    Container,
    MainSection,
    SessionTitle,
} from './layout.styles';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { ImageAction } from '../../types/enums';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import {
    ImageContainer,
    ImageMaskContainer,
    ImagePoint,
} from '../components/ImageCanvas/index.styles';

import { Tooltip } from 'react-tooltip';
import type { IconProps } from '../components/Icon';

const Controls = styled.div`
    place-self: start;
    width: 60%;

    display: grid;
    grid-template-columns: repeat(auto-fit, 2.5rem);
    grid-auto-rows: auto;
    grid-auto-flow: row;

    gap: 1rem;
`;

const Options = styled.div`
    justify-self: end;

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 1rem;

    & > button {
        width: 100%;
        justify-content: center;
    }

    & > :nth-child(3) {
        margin-top: auto;
    }
`;

const OpacityControl = styled.label<{ theme: ThemeOptions }>`
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.heading};
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.background};
    border: 0.0625 solid ${({ theme }) => theme.colors.border};
    border-radius: 0.25rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const AppLayout = () => {
    const imageContainerRef = useRef(null);

    const [history, setHistory] = useState<Array<Array<ImagePoint>>>([]);

    const [activeTool, setActiveTool] = useState<ImageAction>(ImageAction.Add);
    const [cursorType, setCursorType] = useState('crosshair');
    const [points, setPoints] = useState<Array<ImagePoint>>([]);
    const [pointType, setPointType] = useState<PointVariant>('object');
    const [zoomLevel, setZoomLevel] = useState(2);
    const [isPanning, setIsPanning] = useState(false);
    const [maskOpacity, setMaskOpacity] = useState(0.5);

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
    }, [activeTool]);

    const handleClick = (event: React.MouseEvent) => {
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

    const handleZoom = (newZoomLevel: {
        state: { scale: SetStateAction<number> };
    }) => {
        setZoomLevel(newZoomLevel.state.scale);
    };

    const handleMouseOver = (activePoint: ImagePoint) => {
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
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            <LibStyleOverrides />
            <Header />
            <Container>
                <SideNav />
                <MainSection>
                    <CanvasContainer>
                        <div
                            style={{
                                justifySelf: 'start',
                            }}
                        >
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
                        <div style={{ justifySelf: 'end' }}>
                            <Button
                                variant='flat'
                                icon={{ src: 'download', location: 'left' }}
                                disabled={activeTool !== ImageAction.Segment}
                            >
                                Download
                            </Button>
                        </div>
                        <Controls>
                            {controls.map(
                                ({ variant, src, alt, onClick }, index) => (
                                    <div key={index}>
                                        <Tooltip
                                            anchorSelect={`.${src}`}
                                            content={alt}
                                        />
                                        <Icon
                                            variant={variant}
                                            src={src}
                                            alt={alt}
                                            onClick={onClick}
                                        />
                                    </div>
                                )
                            )}
                        </Controls>
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
                                <ImageContainer
                                    ref={imageContainerRef}
                                    onClick={(e) => handleClick(e)}
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
                                            onMouseOver={() =>
                                                handleMouseOver(point)
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
                        <Options>
                            <Button
                                variant={
                                    pointType === 'object' ? 'success' : 'flat'
                                }
                                onClick={() => setPointType('object')}
                            >
                                Object
                            </Button>
                            <Button
                                variant={
                                    pointType === 'background'
                                        ? 'danger'
                                        : 'flat'
                                }
                                onClick={() => setPointType('background')}
                            >
                                Background
                            </Button>

                            {activeTool === ImageAction.Erase && (
                                <p>
                                    <b>Hint:</b>
                                    <br />
                                    Hover over the points on the image to remove
                                    them.
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
                                        onChange={(e) =>
                                            setMaskOpacity(
                                                Number(e.target.value)
                                            )
                                        }
                                    />
                                </OpacityControl>
                            )}
                        </Options>
                    </CanvasContainer>
                    <Divider variant='horizontal' />
                </MainSection>
            </Container>
        </ThemeProvider>
    );
};

export default AppLayout;
