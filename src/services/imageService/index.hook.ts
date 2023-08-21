import { useContext } from 'react';
import { ImageContext } from './index.context';

export const useImageService = (): ImageContextType => {
    const context = useContext(ImageContext);
    if (!context) {
        throw new Error('useImageContext must be used within an ImageProvider');
    }
    return context;
};
