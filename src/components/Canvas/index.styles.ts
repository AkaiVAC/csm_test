import styled from 'styled-components';

export const CanvasContainer = styled.div<{ theme: ThemeOptions }>`
    height: 100%;

    display: grid;
    grid-template: 5rem auto / 1fr;
    grid-template-areas:
        'nav '
        'canvas';

    place-items: center;

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.mobile}px`}) {
        & {
            grid-template: 3.5rem auto / 1fr;
            grid-template-areas:
                'nav '
                'canvas';
        }
        border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.border};
    }
`;

export const InteractiveArea = styled.div`
    width: 100%;
    height: calc(100dvh - 11rem);

    background-color: white;
    display: flex;
    gap: 0.5rem;

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.mobile}px`}) {
        & {
            width: calc(100% - 2rem);
            height: calc(100dvh - 11.5rem);

            display: grid;
            grid-template: minmax(5rem, 100%) / 1fr 1fr;
            grid-template-areas:
                'canvas canvas'
                'controls options';

            place-items: center;
            gap: unset;
        }
    }
`;
