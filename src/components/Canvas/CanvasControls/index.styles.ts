import styled from 'styled-components';

export const CanvasControlContainer = styled.div<{ theme: ThemeOptions }>`
    width: 25%;
    height: fit-content;
    padding: 1rem;

    display: flex;
    flex-wrap: wrap;

    gap: 1rem;

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.tablet}px`}) {
        & {
            width: min-content;
            justify-content: center;
        }
    }

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.mobile}px`}) {
        & {
            grid-area: controls;

            width: calc(100% - 2rem);
            padding: unset;

            justify-content: flex-start;
            gap: 0.5rem;
        }
    }
`;
