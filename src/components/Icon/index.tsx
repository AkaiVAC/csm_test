import { OutlinedIcon, FlatIcon, CircleIcon, TextIcon } from './index.styles';

export type IconProps = {
    variant: IconVariant;
    src: string;
    alt: string;
    disabled?: boolean;
    width?: string;
    height?: string;
    onClick?: () => void;
};

const Icon = ({ variant, src, alt, width, height, onClick }: IconProps) => {
    switch (variant) {
        case 'text':
            return (
                <TextIcon
                    className={src}
                    src={`icons/${src}.svg`}
                    alt={alt}
                    width={width || '40'}
                    height={height || '40'}
                    onClick={onClick}
                />
            );
        case 'outlined':
            return (
                <OutlinedIcon
                    className={src}
                    src={`icons/${src}.svg`}
                    alt={alt}
                    width={width || '40'}
                    height={height || '40'}
                    onClick={onClick}
                />
            );
        case 'flat':
            return (
                <FlatIcon
                    className={src}
                    src={`icons/${src}.svg`}
                    alt={alt}
                    width={width || '40'}
                    height={height || '40'}
                    onClick={onClick}
                />
            );
        case 'circle':
            return (
                <CircleIcon
                    className={src}
                    src={`icons/${src}.svg`}
                    alt={alt}
                    width={width || '40'}
                    height={height || '40'}
                    onClick={onClick}
                />
            );
        default:
            return null;
    }
};

export default Icon;
