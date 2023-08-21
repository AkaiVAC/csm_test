import CanvasControls from './CanvasControls';
import CanvasHeader from './CanvasHeader';
import CanvasOptions from './CanvasOptions';
import ImageCanvas from './ImageCanvas';
import { CanvasProvider } from '../../stores/canvas/index.provider';
import { CanvasContainer, InteractiveArea } from './index.styles';

const Canvas = () => {
    return (
        <CanvasProvider>
            <CanvasContainer>
                <CanvasHeader />
                <InteractiveArea>
                    <CanvasControls />
                    <ImageCanvas />
                    <CanvasOptions />
                </InteractiveArea>
            </CanvasContainer>
        </CanvasProvider>
    );
};

export default Canvas;
