declare global {
    type ThemeOptions = {
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            background: string;
            border: string;
            success: string;
            danger: string;
        };
        fonts: {
            main: string;
            heading: string;
        };
    };

    type IconVariant = 'outlined' | 'flat' | 'circle' | 'text';
    type NavVariant = 'horizontal' | 'vertical';
    type DividerVariant = 'horizontal' | 'vertical';
    type ButtonVariant = 'flat' | 'text' | 'success' | 'sidebar' | 'danger';
    type PointVariant = 'object' | 'background';

    type ImagePoint = {
        x: number;
        y: number;
        type: PointVariant;
    };
}
export {};
