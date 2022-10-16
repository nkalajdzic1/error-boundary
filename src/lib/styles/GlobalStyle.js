import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

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
