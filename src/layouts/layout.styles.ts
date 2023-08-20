import styled from 'styled-components';

export const TopBG = styled.div`
    height: 100%;

    position: fixed;
    inset: 0 0 0 0;

    background-image: url('colors.webp');
    background-position: top;
    background-size: 100%;
    background-repeat: no-repeat;

    pointer-events: none;
`;

export const BottomBG = styled(TopBG)`
    rotate: 180deg;
    background-size: 25%;
`;

export const Container = styled.div`
    margin: 0.5rem;
    margin-bottom: unset;
    height: calc(100vh - 6.625rem);

    display: grid;
    grid-template: 1fr / min-content auto;

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.mobile}px`}) {
        & {
            max-height: 100dvh;
            grid-template: 3rem 1fr / 1fr;
        }
    }
`;

export const MainSection = styled.main`
    padding: 1rem;

    display: grid;
    grid-template: 90% 10% / 1fr;
    align-items: start;
    gap: 0.25rem;

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.mobile}px`}) {
        & {
            height: fit-content;
            max-height: 100dvh;
            padding: unset;
            grid-template: 3rem 1fr / 1fr;
        }
    }
`;
