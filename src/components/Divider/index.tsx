import { HorizontalDivider, VerticalDivider } from './index.styles';

export type DividerProps = {
    variant: DividerVariant;
};

const Divider = ({ variant }: DividerProps) => {
    switch (variant) {
        case 'horizontal':
            return <HorizontalDivider />;
        case 'vertical':
            return <VerticalDivider />;
        default:
            return null;
    }
};

export default Divider;
