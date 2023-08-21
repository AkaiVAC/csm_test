import styled from 'styled-components';

export const ImageCanvasContainer = styled.div<{ theme: ThemeOptions }>`
    width: 100%;
    height: calc(100% - 9vh);
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 1.5rem;

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.tablet}px`}) {
        & {
            height: 32rem;
        }
    }

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.mobile}px`}) {
        & {
            grid-area: canvas;

            height: calc(100% - 2rem);
        }
    }
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
