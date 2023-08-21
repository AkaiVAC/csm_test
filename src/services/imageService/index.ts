import { useContext } from 'react';
import { ImageContext } from './index.context';

export const useImageSegmentation = () => {
    const context = useContext(ImageContext);
    if (!context) {
        throw new Error(
            'useImageSegmentation must be used within an ImageProvider'
        );
    }
    return context;
};
