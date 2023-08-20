import styled from 'styled-components';

export const CanvasHeaderContainer = styled.div<{ theme: ThemeOptions }>`
    grid-area: nav;
    width: calc(100% - 2rem);

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.mobile}px`}) {
        & {
            & > button {
                padding: 0.5rem;
            }
        }
    }
`;

export const SessionTitle = styled.h2<{ theme: ThemeOptions }>`
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.heading};

    margin: unset;
`;
