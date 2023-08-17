import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '..';
import { IconProps } from '../Icon';

export const ButtonContainer = css`
    width: 100%;
    height: 2.5rem;

    font-size: 0.875rem;
    font-weight: 700;
    font-family: ${({ theme }) => theme.fonts.main};

    border-radius: 0.25rem;
    border-color: transparent;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    cursor: pointer;
`;

export const FlatButton = styled.button`
    ${ButtonContainer};
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.background};

    &:hover {
        filter: brightness(0.95);
    }

    &:active {
        filter: brightness(0.9);
    }
`;

export const TextButton = styled.button`
    ${ButtonContainer};
    color: ${({ theme }) => theme.colors.secondary};
    background-color: transparent;

    &:hover {
        background-color: ${({ theme }) => theme.colors.background};
    }

    &:active {
        filter: brightness(0.9);
    }
`;

export const SuccessButton = styled.button`
    ${ButtonContainer};
    color: white;
    background-color: ${({ theme }) => theme.colors.success};
`;

export type ButtonProps = {
    variant: ButtonVariant;
    children: ReactNode;
    icon?: { location: 'left' | 'right' } & Omit<IconProps, 'variant' | 'alt'>;
    to?: string;
};

const Button = ({ variant, children, icon, to }: ButtonProps) => {
    const contents = (
        <>
            {icon && icon.location === 'left' && (
                <Icon variant='text' src={icon.src} alt='' />
            )}
            {children}
            {icon && icon.location === 'right' && (
                <Icon variant='text' src={icon.src} alt='' />
            )}
        </>
    );

    switch (variant) {
        case 'flat':
            return (
                <FlatButton onClick={() => to && window.open(to)}>
                    {contents}
                </FlatButton>
            );
        case 'text':
            return (
                <TextButton onClick={() => to && window.open(to)}>
                    {contents}
                </TextButton>
            );
        case 'success':
            return (
                <SuccessButton onClick={() => to && window.open(to)}>
                    {contents}
                </SuccessButton>
            );
        default:
            return null;
    }
};

export default Button;
