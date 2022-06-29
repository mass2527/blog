import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
import { center } from "./utils/center";

const GlobalStyle = createGlobalStyle`
    ${normalize};
    
    html{
        line-height:1.3;
    }

    body{
        background-color:${({ theme }) => theme.colors.black1};
        color:${({ theme }) => theme.colors.black12};
    }

    h1{
        font-size:${({ theme }) => theme.fontSizes[32]};
    }
    h2{
        font-size:${({ theme }) => theme.fontSizes[24]};
    }
    h3{
        font-size:${({ theme }) => theme.fontSizes[20]};
    }

    a{
        color:${({ theme }) => theme.colors.gray11};
        text-decoration:none;
        cursor:pointer;

        &:hover{
            color:${({ theme }) => theme.colors.gray12};
        }
    }

    button{
        ${center};
        cursor:pointer;
        background-color:transparent;
        color:inherit;
        border-color:transparent;
        border-radius:${({ theme }) => theme.radiuses[4]};

        &:disabled{
            cursor:not-allowed;
        }
    }
`;

export default GlobalStyle;
