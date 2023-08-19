import styled from 'styled-components';

export const ButtonContainer = styled.button<{ theme: ThemeOptions }>`
    width: 100%;
    height: 2.5rem;

    font-size: 0.875rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.main};

    border-radius: 0.25rem;
    border-color: transparent;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    cursor: pointer;
`;

export const FlatButton = styled(ButtonContainer)`
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.background};

    &:hover {
        filter: brightness(0.95);
    }

    &:active {
        filter: brightness(0.9);
    }
`;

export const TextButton = styled(ButtonContainer)`
    color: ${({ theme }) => theme.colors.secondary};
    background-color: transparent;

    &:hover {
        background-color: ${({ theme }) => theme.colors.background};
    }

    &:active {
        filter: brightness(0.9);
    }
`;

export const SuccessButton = styled(ButtonContainer)`
    color: white;
    background-color: ${({ theme }) => theme.colors.success};
`;
