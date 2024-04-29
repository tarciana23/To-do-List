import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        --webkit-font-smoothings: antialiased;//fontes mais suaveis

        display: flex;
        align-items: center;
        justify-content: center;

    }
    
    body, input , button , textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor:pointer;
        transition: filter 0.2s;
    }
    button:hover, a:hover{
        filter: brightness(0.9)//vai dar uma escurecida no botao
    }
`;