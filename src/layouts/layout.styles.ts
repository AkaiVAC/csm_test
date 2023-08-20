import styled from 'styled-components';

export const Container = styled.div`
    margin: 0.5rem;
    margin-bottom: unset;
    height: calc(100vh - 6.625rem);

    display: grid;
    grid-template: 1fr / minmax(15rem, 10%) 1px auto;
`;

export const MainSection = styled.main`
    padding: 1rem;

    display: grid;
    grid-template: 90% 10% / 1fr;
    align-items: start;
    gap: 0.25rem;
`;
