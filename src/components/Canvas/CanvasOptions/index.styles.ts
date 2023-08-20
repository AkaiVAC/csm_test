import styled from 'styled-components';

export const CanvasOptionContainer = styled.div`
    width: 30%;
    height: fit-content;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 1rem;

    & > button {
        width: 100%;
        max-width: 10rem;
        justify-content: center;
    }

    & > :nth-child(3) {
        margin-top: auto;
    }

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.mobile}px`}) {
        & {
            grid-area: options;

            width: 100%;
            height: unset;

            padding: unset;

            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;

            & > button {
                max-width: 8rem;
                height: unset;
                padding: 0.25rem 0.25rem;
            }
        }
    }
`;

export const OpacityControl = styled.label<{ theme: ThemeOptions }>`
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.heading};
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.background};
    border: 0.0625 solid ${({ theme }) => theme.colors.border};
    border-radius: 0.25rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.mobile}px`}) {
        & {
            width: 100%;

            & > input {
                width: 80%;
            }
        }
    }
`;
