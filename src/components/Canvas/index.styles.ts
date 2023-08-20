import styled from 'styled-components';

export const CanvasContainer = styled.div`
    height: 100%;

    display: grid;
    grid-template: 3.5rem auto / 1fr;
    grid-template-areas:
        'nav '
        'canvas';

    place-items: center;
    gap: 1rem;
`;

export const InteractiveArea = styled.div`
    width: 100%;
    padding: 1rem;

    background-color: white;
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;
