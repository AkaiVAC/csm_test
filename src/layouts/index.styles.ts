import styled from 'styled-components';

export const Container = styled.div`
    height: calc(100dvh - 6.625rem);

    display: grid;
    grid-template: 1fr / max-content 0.0625rem auto;

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.tablet}px`}) {
        & {
            height: calc(100dvh - 4.625rem);
        }
    }

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.mobile}px`}) {
        & {
            height: calc(100dvh - 3.8rem);
            grid-template: calc(100dvh - 7.3rem) 3.5rem / 1fr;
        }
    }
`;

export const MainSection = styled.main`
    display: grid;
    grid-template: 1fr / 1fr;
    align-items: start;
    gap: 0.25rem;

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.mobile}px`}) {
        & {
            height: fit-content;
            padding: unset;
            grid-template: 3.4rem 1fr / 1fr;
        }
    }
`;
