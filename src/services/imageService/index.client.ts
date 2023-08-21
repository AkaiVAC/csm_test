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
        console.error('Error segmenting image:', error);
        throw error;
    }
};
