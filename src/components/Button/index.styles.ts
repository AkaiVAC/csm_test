import styled from 'styled-components';

export const ButtonContainer = styled.button<{ theme: ThemeOptions }>`
    width: fit-content;
    height: 2.5rem;

    font-size: 1rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.heading};

    padding-inline: 1rem;

    border-radius: 0.25rem;
    border-color: transparent;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    cursor: pointer;

    &:disabled {
        pointer-events: none;
        opacity: 0.5;
    }
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

export const DangerButton = styled(ButtonContainer)`
    color: white;
    background-color: ${({ theme }) => theme.colors.danger};
`;

export const SideBarEntry = styled(TextButton)`
    font-size: 0.875rem;
    font-family: ${({ theme }) => theme.fonts.main};

    width: 100%;
    gap: 1rem;
`;
