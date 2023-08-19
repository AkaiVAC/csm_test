import { ReactNode } from 'react';
import { Icon } from '..';
import { IconProps } from '../Icon';
import { FlatButton, TextButton, SuccessButton } from './index.styles';

export type ButtonProps = {
    variant: ButtonVariant;
    children: ReactNode;
    icon?: Omit<IconProps, 'variant' | 'alt'> & { location: 'left' | 'right' };
    onClick?: () => void;
};

const Button = ({ variant, children, icon, onClick }: ButtonProps) => {
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
            return <FlatButton onClick={onClick}>{contents}</FlatButton>;
        case 'text':
            return <TextButton onClick={onClick}>{contents}</TextButton>;
        case 'success':
            return <SuccessButton onClick={onClick}>{contents}</SuccessButton>;
        default:
            return null;
    }
};

export default Button;
