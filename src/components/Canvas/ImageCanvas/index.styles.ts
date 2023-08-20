import styled from 'styled-components';

export const ImageCanvasContainer = styled.div`
    width: 100%;
    padding-block: 0.5rem;
`;

export const ImageContainer = styled.div`
    position: relative;
    border-radius: 1.5rem;
    width: 100%;
    height: 100%;
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
