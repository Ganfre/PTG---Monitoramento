import {createGlobalStyle} from 'styled-components'

const EstilosGlobais = createGlobalStyle `
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        background: #f2f2f2;
        overflow-x: hidden;
        text-decoration: none;
    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        background: #00684A;
        color: white;
        border: 2px solid white;
        border-radius: 0.5rem;
        transition: all 0.5s ease;
        &:houver{
            background-color: black;
            color: white;
        }
    }

    h3{
        color: black;
    }

    a{
        font-size: 1.1rem;
    }

    span{
        font-weight: lighter;
        color: #416CD5;
    }

    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1rem;
        line-height: 150%;
    }

    label{
        color: black;
        font-weight: bold;
    }
`;

export default EstilosGlobais