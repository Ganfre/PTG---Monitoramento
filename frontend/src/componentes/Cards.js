import React from "react";
import styled from "styled-components";

const StyleCard = styled.div`
    box-sizing: border-box;
    background-color: #58617b;
    border-color: black;
    border-radius: 0.8rem;
    cursor: pointer;
    overflow: hidden;

    a{
        text-decoration: none;
    }
`;

const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;

    h3{
        color: white;
        font-weight: bold;
        text-align: center;
        padding: 0.6rem;
    }

    h4{
        display: flex;
        padding-left: 0.8rem;
        padding-bottom: 0.5rem;
        color: black;
        font-weight: bold;
    }

`;

const H4 =styled.div`
    color: white;
    font-weight: bold;
`;


const Info = styled.div`
    
`;

const Cards = ({projeto})=>{
    return(
        <>
            <StyleCard>
                <Conteudo>
                    <h3>{projeto.nome}</h3>
                    <img src={projeto.imagem} alt='imagem'/>
                    <Info>
                        <h4>Temperatura:&nbsp;<H4>{projeto.temperatura}</H4>&nbsp;&nbsp;&nbsp;Vibração:&nbsp;<H4>{projeto.vibracao}</H4>&nbsp;&nbsp;&nbsp;</h4>
                        <h4>Corrente:&nbsp;<H4>{projeto.corrente}</H4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rpm:&nbsp;<H4>{projeto.rpm}</H4></h4>
                    </Info>
                </Conteudo>
            </StyleCard>
        </>
    )
}

export default Cards