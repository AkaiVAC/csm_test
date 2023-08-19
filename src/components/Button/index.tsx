import { ReactNode } from 'react';
import { Icon } from '..';
import { IconProps } from '../Icon';
import {
    FlatButton,
    TextButton,
    SuccessButton,
    SideBarEntry,
    DangerButton,
} from './index.styles';

export type ButtonProps = {
    variant: ButtonVariant;
    children: ReactNode;
    icon?: Omit<IconProps, 'variant' | 'alt'> & { location: 'left' | 'right' };
    disabled?: boolean;
    onClick?: () => void;
};

const Button = ({
    variant,
    children,
    icon,
    disabled,
    onClick,
}: ButtonProps) => {
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
                <FlatButton disabled={disabled} onClick={onClick}>
                    {contents}
                </FlatButton>
            );
        case 'text':
            return (
                <TextButton disabled={disabled} onClick={onClick}>
                    {contents}
                </TextButton>
            );
        case 'success':
            return (
                <SuccessButton disabled={disabled} onClick={onClick}>
                    {contents}
                </SuccessButton>
            );
        case 'danger':
            return (
                <DangerButton disabled={disabled} onClick={onClick}>
                    {contents}
                </DangerButton>
            );
        case 'sidebar':
            return (
                <SideBarEntry disabled={disabled} onClick={onClick}>
                    {contents}
                </SideBarEntry>
            );
        default:
            return null;
    }
};

export default Button;
