declare global {
    type ThemeOptions = {
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            background: string;
            border: string;
            success: string;
        };
        fonts: {
            main: string;
            heading: string;
        };
    };

    type IconVariant = 'outlined' | 'flat' | 'circle' | 'text';
    type NavVariant = 'horizontal' | 'vertical';
    type DividerVariant = 'horizontal' | 'vertical';
    type ButtonVariant = 'flat' | 'text' | 'success';
}
export {};
