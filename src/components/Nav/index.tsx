import { ReactNode } from 'react';
import { HorizontalNav, VerticalNav } from './index.styles';

export type NavProps = {
    variant: NavVariant;
    children: ReactNode;
};

const Nav = ({ variant, children }: NavProps) => {
    switch (variant) {
        case 'horizontal':
            return <HorizontalNav>{children}</HorizontalNav>;
        case 'vertical':
            return <VerticalNav>{children}</VerticalNav>;
        default:
            return null;
    }
};

export default Nav;
