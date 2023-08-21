import { ReactNode, useState } from 'react';
import { segmentImage, getSegmentedImage } from '.';
import { ImageContext } from './index.context';

export const ImageProvider = ({ children }: { children: ReactNode }) => {
    const [currentImage, setCurrentImage] = useState<string | null>(null);

    const sendAndReceiveImage = async (imageFile: ImageFile) => {
        const newImage = await segmentImage(imageFile);
        setCurrentImage(newImage);
    };

    const fetchNewImage = async () => {
        const newImage = await getSegmentedImage();
        setCurrentImage(newImage);
    };

    const contextValue: ImageContextType = {
        currentImage,
        sendAndReceiveImage,
        fetchNewImage,
    };

    return (
        <ImageContext.Provider value={contextValue}>
            {children}
        </ImageContext.Provider>
    );
};
