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
                <Icon variant='text' src={icon.src} alt='' tabIndex={-1} />
            )}
            {children}
            {icon && icon.location === 'right' && (
                <Icon variant='text' src={icon.src} alt='' tabIndex={-1} />
            )}
        </>
    );

    const attrs = {
        disabled,
        onClick,
        tabIndex: 0,
    };

    switch (variant) {
        case 'flat':
            return <FlatButton {...attrs}>{contents}</FlatButton>;
        case 'text':
            return <TextButton {...attrs}>{contents}</TextButton>;
        case 'success':
            return <SuccessButton {...attrs}>{contents}</SuccessButton>;
        case 'danger':
            return <DangerButton {...attrs}>{contents}</DangerButton>;
        case 'sidebar':
            return <SideBarEntry {...attrs}>{contents}</SideBarEntry>;
        default:
            return null;
    }
};

export default Button;
