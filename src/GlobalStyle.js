import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: ${({ theme }) => theme.font.family};
        background: ${({ theme }) => theme.color.background};
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${({ theme }) => theme.color.text};
    }

    ::selection {
        background: ${({ theme }) => theme.color.primary};
        color: white;
    }
`;