import { OutlinedIcon, FlatIcon, CircleIcon, TextIcon } from './index.styles';

export type IconProps = {
    variant: IconVariant;
    src: string;
    alt: string;
};

const Icon = ({ variant, src, alt }: IconProps) => {
    switch (variant) {
        case 'text':
            return <TextIcon src={`icons/${src}.svg`} alt={alt} width='100%' />;
        case 'outlined':
            return (
                <OutlinedIcon src={`icons/${src}.svg`} alt={alt} width='100%' />
            );
        case 'flat':
            return <FlatIcon src={`icons/${src}.svg`} alt={alt} width='100%' />;
        case 'circle':
            return (
                <CircleIcon src={`icons/${src}.svg`} alt={alt} width='100%' />
            );
        default:
            return null;
    }
};

export default Icon;
