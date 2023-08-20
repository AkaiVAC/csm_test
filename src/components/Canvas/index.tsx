import CanvasControls from './CanvasControls';
import CanvasHeader from './CanvasHeader';
import CanvasOptions from './CanvasOptions';
import ImageCanvas from './ImageCanvas';
import { CanvasContainer, InteractiveArea } from './index.styles';

const Canvas = () => {
    return (
        <CanvasContainer>
            <CanvasHeader />
            <InteractiveArea>
                <CanvasControls />
                <ImageCanvas />
                <CanvasOptions />
            </InteractiveArea>
        </CanvasContainer>
    );
};

export default Canvas;
