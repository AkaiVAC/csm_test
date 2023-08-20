import styled from 'styled-components';

export const CanvasContainer = styled.div`
    height: 100%;

    display: grid;
    grid-template: 3.5rem auto / 1fr;
    grid-template-areas:
        'nav '
        'canvas';

    place-items: start;

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.mobile}px`}) {
        & {
            grid-template: 6rem auto / 1fr;
            grid-template-areas:
                'nav '
                'canvas';
        }
    }
`;

export const InteractiveArea = styled.div`
    width: 100%;
    height: 100%;

    background-color: white;
    display: flex;
    gap: 0.5rem;

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.mobile}px`}) {
        & {
            flex-wrap: wrap;
            /* flex-direction: center; */
        }
    }
`;
