import { Ref } from 'react';
import styled from 'styled-components';

export const DropdownContainer = styled.div<{ theme: ThemeOptions }>`
    font-family: ${({ theme }) => theme.fonts.heading};

    display: inline-flex;
    align-items: center;

    position: relative;

    cursor: pointer;
`;

export const DropdownIcon = styled.img`
    font-size: 1.125rem;
    margin-left: 0.5rem;
`;

export const DropdownList = styled.ul<{ ref: Ref<HTMLElement> }>`
    list-style: none;

    font-size: 1rem;

    padding: unset;
    background-color: #fff;
    border-radius: 0.25rem;

    display: flex;
    flex-direction: column;

    position: absolute;
    top: 1rem;

    cursor: pointer;
`;

export const DropdownListItem = styled.li<{ theme: ThemeOptions }>`
    font-family: ${({ theme }) => theme.fonts.heading};

    &:first-of-type {
        border-radius: 0.25rem 0.25rem 0 0;
    }

    &:not(:last-of-type) {
        border-bottom: 0.0625rem solid whitesmoke;
    }

    &:last-of-type {
        border-radius: 0 0 0.25rem 0.25rem;
    }

    &:hover {
        color: white;
        background-color: ${({ theme }) => theme.colors.primary};
    }
`;

export const DropdownLink = styled.a`
    display: block;

    color: inherit;
    font-size: 0.875rem;
    text-decoration: none;
    padding: 0.5rem 1rem;
`;
