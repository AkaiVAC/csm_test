import { useContext } from 'react';
import { CanvasContext } from './index.context';

export const useCanvasStore = () => {
    const context = useContext(CanvasContext);
    if (!context) {
        throw new Error('useCanvasStore must be used within a CanvasProvider');
    }
    return context;
};
