import { ThemeProvider, styled } from 'styled-components';
import { Theme, GlobalStyle } from './components/Theme';
import { Button, Divider, Header, Nav } from './components';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { SetStateAction, useState } from 'react';
const Container = styled.div`
    margin: 0.5rem;
    margin-bottom: unset;
    height: calc(100vh - 6.625rem);

    display: grid;
    grid-template: 1fr / 16rem 1px auto;
`;

const SubContainer = styled.div`
    display: grid;
    grid-template: 90% 10% / 1fr;
    align-items: start;
`;

const App = () => {
    const [points, setPoints] = useState<Array<{ x: number; y: number }>>([]);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [isPanning, setIsPanning] = useState(false);
    const [maskOpacity, setMaskOpacity] = useState(0);

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
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Header />
            <Container>
                <Nav variant='vertical'>
                    <Button
                        variant='flat'
                        icon={{ location: 'left', src: 'overview' }}
                    >
                        Overview
                    </Button>
                    <Button
                        variant='text'
                        icon={{ location: 'left', src: 'segmentVideo' }}
                    >
                        Video Segmentation
                    </Button>
                    <Button
                        variant='text'
                        icon={{ location: 'left', src: 'feedback' }}
                        to='http://www.duckduckgo.com'
                    >
                        Submit Feedback
                    </Button>
                    <input
                        type='range'
                        onChange={(e) =>
                            setMaskOpacity(Number(e.target.value) / 100)
                        }
                    />
                </Nav>

                <Divider variant='vertical' />

                <SubContainer>
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <TransformWrapper
                            initialScale={1}
                            centerOnInit={true}
                            onZoom={handleZoom}
                            onPanning={() => setIsPanning(true)}
                            onPanningStop={() =>
                                setTimeout(() => {
                                    setIsPanning(false);
                                }, 1)
                            }
                        >
                            <TransformComponent>
                                <div
                                    style={{ position: 'relative' }}
                                    onClick={(e) => handleClick(e)}
                                >
                                    <img
                                        src='/obj.jpeg'
                                        alt='test'
                                        style={{
                                            maxHeight: '30rem',
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            zIndex: 1,
                                            backgroundImage: `url('/obj_mask.jpeg')`,
                                            backgroundSize: 'contain',
                                            opacity: maskOpacity,
                                        }}
                                    ></div>
                                    {points.map((point, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                position: 'absolute',
                                                left: point.x,
                                                top: point.y,
                                                width: 10,
                                                height: 10,
                                                borderRadius: '50%',
                                                background: 'red',
                                                scale: `${1.25 / zoomLevel}`,
                                                translate: '-50%  -50%',
                                            }}
                                        ></div>
                                    ))}
                                </div>
                            </TransformComponent>
                        </TransformWrapper>
                    </div>

                    <Divider variant='horizontal' />
                </SubContainer>
            </Container>
        </ThemeProvider>
    );
};

export default App;
