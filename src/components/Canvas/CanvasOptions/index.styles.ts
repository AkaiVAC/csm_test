import styled from 'styled-components';

export const CanvasOptionContainer = styled.div`
    flex-shrink: 2.1;

    width: 100%;
    height: 100%;
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
            width: 100%;
            height: unset;

            & > button {
                max-width: unset;
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
