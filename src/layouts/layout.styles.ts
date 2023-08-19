import styled from 'styled-components';

export const Container = styled.div`
    margin: 0.5rem;
    margin-bottom: unset;
    height: calc(100vh - 6.625rem);

    display: grid;
    grid-template: 1fr / 16rem 1px auto;
`;

export const MainSection = styled.main`
    padding: 1rem;

    display: grid;
    grid-template: 90% 10% / 1fr;
    align-items: start;
`;

export const SessionTitle = styled.h2<{ theme: ThemeOptions }>`
    font-size: 1.2rem;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.heading};

    margin: unset;
`;

export const CanvasContainer = styled.div`
    display: grid;
    grid-template: 3.5rem auto / 10rem 2fr 10rem;
    grid-template-areas:
        'nav info download'
        'controls canvas options';

    place-items: center;
    gap: 1rem;
`;
