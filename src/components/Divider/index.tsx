import styled from 'styled-components';

export type DividerProps = {
    variant: DividerVariant;
};

const HorizontalDivider = styled.hr`
    width: 100%;
    margin: unset;

    border: unset;
    border-bottom: 0.0625rem solid #dee2e6;
`;

const VerticalDivider = styled.hr`
    height: 100%;
    margin: unset;

    border: unset;
    border-right: 0.0625rem solid #dee2e6;
`;

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
