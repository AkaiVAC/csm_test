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
            height: 100%;
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
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
`;

export const StatusBubble = styled.div<{ theme: ThemeOptions }>`
    width: fit-content;
    padding: 0.25rem 0.5rem;

    font-size: 0.8rem;
    font-family: ${({ theme }) => theme.fonts.heading};
    border-radius: 2rem 2rem;
    background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const MobileContainer = styled.div<{ theme: ThemeOptions }>`
    @media screen and (max-width: ${({ theme }) => `${theme.sizes.mobile}px`}) {
        & {
            scale: 0.75;
        }
    }
`;
