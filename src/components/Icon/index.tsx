import { OutlinedIcon, FlatIcon, CircleIcon, TextIcon } from './index.styles';

export type IconProps = {
    variant: IconVariant;
    src: string;
    alt: string;
    disabled?: boolean;
    width?: string;
    height?: string;
    tabIndex?: number;
    onClick?: () => void;
};

const Icon = ({
    variant,
    src,
    alt,
    disabled,
    width,
    height,
    tabIndex,
    onClick,
}: IconProps) => {
    const attrs = {
        className: `${src} ${disabled ? 'disabled' : ''}`,
        src: `icons/${src}.svg`,
        alt: alt,
        width: width || '40',
        height: height || '40',
        onKeyDown: (event: React.KeyboardEvent) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onClick && onClick();
            }
        },
        tabIndex: tabIndex ?? -1,
        role: tabIndex === 0 ? 'button' : '',
        onClick: disabled ? () => ({}) : onClick,
    };

    switch (variant) {
        case 'text':
            return <TextIcon {...attrs} />;
        case 'outlined':
            return <OutlinedIcon {...attrs} />;
        case 'flat':
            return <FlatIcon {...attrs} />;
        case 'circle':
            return <CircleIcon {...attrs} />;
        default:
            return null;
    }
};

export default Icon;
