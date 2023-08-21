import { ReactNode, useState } from 'react';
import { segmentImage } from './index.client';
import { ImageContext } from './index.context';

export const ImageProvider = ({ children }: { children: ReactNode }) => {
    const [currentImage, setCurrentImage] = useState<string | null>(null);

    const getSegmentedImage = async (imageFile: ImageFile) => {
        const newImage = await segmentImage(imageFile);
        setCurrentImage(newImage);
    };

    const contextValue: ImageContextType = {
        currentImage,
        getSegmentedImage,
    };

    return (
        <ImageContext.Provider value={contextValue}>
            {children}
        </ImageContext.Provider>
    );
};
