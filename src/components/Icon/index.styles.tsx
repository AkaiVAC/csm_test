import styled from 'styled-components';

export const TextIcon = styled.img<{ size?: string }>`
    padding: 0.5rem;
    display: inline-flex;
    place-items: center;

    background-color: transparent;
    border: 0.0625rem solid;
    border-color: transparent;
    border-radius: 0.625rem;

    cursor: pointer;
`;

export const OutlinedIcon = styled(TextIcon)`
    border-color: ${({ theme }) => theme.colors.tertiary};
`;

export const FlatIcon = styled(OutlinedIcon)`
    border-color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.background};
`;

export const CircleIcon = styled(FlatIcon)`
    border-radius: 50%;
    border-color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.background};
`;
