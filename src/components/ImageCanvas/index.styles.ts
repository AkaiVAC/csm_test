import styled from 'styled-components';

export const ImageCanvasContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImageMaskContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-image: url('/obj_mask.jpeg');
    background-size: contain;
`;

export const ImagePoint = styled.div`
    position: absolute;
    border-radius: 50%;
    translate: -50% -50%;
`;
