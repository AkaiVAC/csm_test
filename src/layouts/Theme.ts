import { createGlobalStyle } from 'styled-components';

const Theme: ThemeOptions = {
    colors: {
        primary: '#2B2A6C',
        secondary: '#2B2A70',
        tertiary: '#C8EAFF',
        background: '#F8F9FA',
        border: '#DEE2E6',
        success: '#28A745',
    },
    fonts: {
        main: 'lato, sans-serif',
        heading: 'Poppins, serif',
    },
};

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 16px;
        line-height: 1.5;
        font-weight: 400;

        color-scheme: light dark;
        color: hsla(241, 45%, 30%, 1);
        background: hsla(0, 0%, 100%, 1);

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }


    body {
        font-family: ${({ theme }) => theme.fonts.main};
        margin: 0;
        padding: 1rem;
        padding-bottom: unset;
        height: calc(100vh - 1rem);

        background-image: url('colors.webp');
        background-position: top;
        background-size: 120%;
        background-repeat: no-repeat;
    }
`;

export { Theme, GlobalStyle };
