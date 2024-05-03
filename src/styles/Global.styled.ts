import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }


    body {
        margin: 0;
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.primaryFont};
        line-height: 1.4;
        min-width: 360px;
     
    }

    a {
        text-decoration: none;
        color: ${theme.colors.secondaryFont};
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
        color: ${theme.colors.secondaryFont};


    }

    section {
        padding: 100px 0;

    }



`;
