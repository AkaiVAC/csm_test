import styled from 'styled-components';

export const CanvasControlContainer = styled.div`
    flex-shrink: 2.3;

    align-self: start;
    width: 100%;
    padding: 1rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, 2.5rem);
    grid-auto-rows: auto;
    grid-auto-flow: row;

    gap: 1rem;

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.mobile}px`}) {
        & {
            justify-content: center;
        }
    }
`;
