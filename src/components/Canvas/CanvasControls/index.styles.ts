import styled from 'styled-components';

export const CanvasControlContainer = styled.div`
    flex-shrink: 2.3;

    place-self: start;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fit, 2.5rem);
    grid-auto-rows: auto;
    grid-auto-flow: row;

    gap: 1rem;
`;
