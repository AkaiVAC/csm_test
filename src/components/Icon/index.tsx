import { OutlinedIcon, FlatIcon, CircleIcon, TextIcon } from './index.styles';

export type IconProps = {
    variant: IconVariant;
    src: string;
    alt: string;
};

const Icon = ({ variant, src, alt }: IconProps) => {
    switch (variant) {
        case 'text':
            return (
                <TextIcon
                    src={`icons/${src}.svg`}
                    alt={alt}
                    width='41.6'
                    height='41.6'
                />
            );
        case 'outlined':
            return (
                <OutlinedIcon
                    src={`icons/${src}.svg`}
                    alt={alt}
                    width='41.6'
                    height='41.6'
                />
            );
        case 'flat':
            return (
                <FlatIcon
                    src={`icons/${src}.svg`}
                    alt={alt}
                    width='41.6'
                    height='41.6'
                />
            );
        case 'circle':
            return (
                <CircleIcon
                    src={`icons/${src}.svg`}
                    alt={alt}
                    width='41.6'
                    height='41.6'
                />
            );
        default:
            return null;
    }
};

export default Icon;
