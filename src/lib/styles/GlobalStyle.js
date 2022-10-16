import { createGlobalStyle } from "styled-components";

import robotoWoff2 from "./fonts/roboto/roboto-v30-latin-regular.woff2";
import robotoWoff from "./fonts/roboto/roboto-v30-latin-regular.woff";

export const GlobalStyle = createGlobalStyle`
   @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src: url(${robotoWoff}) format('woff'),
             url(${robotoWoff2}) format('woff2');
    }

    html, body, #root {
        height: 100%;
    }

    html {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.textColor};
        font-family: 'Roboto';
    }

    body {
        margin: 0;
        padding: 0;
    }

    *, ::before, ::after {
        box-sizing: border-box;
    }
`;
