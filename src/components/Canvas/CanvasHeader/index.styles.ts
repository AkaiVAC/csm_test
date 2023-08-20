import styled from 'styled-components';

export const CanvasHeaderContainer = styled.div`
    grid-area: nav;
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

export const SessionTitle = styled.h2<{ theme: ThemeOptions }>`
    font-size: 1.2rem;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.heading};

    margin: unset;
`;
