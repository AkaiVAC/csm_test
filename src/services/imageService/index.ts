import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'api_base_url';

export const segmentImage = async (imageFile: ImageFile): Promise<string> => {
    try {
        const formData = new FormData();
        formData.append('image', imageFile);

        const response: AxiosResponse<{ image: string }> = await axios.post(
            `${BASE_URL}/segmentImage`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );

        return response.data.image;
    } catch (error) {
        console.error('Error sending image:', error);
        throw error;
    }
};

export const getSegmentedImage = async (): Promise<string> => {
    try {
        const response: AxiosResponse<ArrayBuffer> = await axios.get(
            `${BASE_URL}/getImage`,
            {
                responseType: 'arraybuffer',
            }
        );

        const imageBlob = new Blob([response.data], { type: 'image/jpeg' });
        const imageUrl = URL.createObjectURL(imageBlob);
        return imageUrl;
    } catch (error) {
        console.error('Error getting image:', error);
        throw error;
    }
};
