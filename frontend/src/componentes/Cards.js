import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyleCard = styled.div`
    box-sizing: border-box;
    height: 21rem;
    width: 15rem;
    background-color: #58617b;
    border-color: black;
    border-radius: 0.8rem;
    cursor: pointer;
    overflow: hidden;

    a{
        text-decoration: none;
    }

    img{
        width: 100%;
        height: 10rem;
    }
`;

const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;

    h4{
        color: white;
        font-weight: bold;
        text-align: center;
        padding-bottom: 0.4rem;
    }

    h6{
        display: flex;
        padding-left: 1.1rem;
        margin-bottom: none;
        color: black;
        font-weight: bold;
    }

`;

const H5 =styled.div`
    color: white;
    font-weight: bold;
`;


const Info = styled.div`
    padding-top: 0.4rem;
`;

const Cards = ({projeto})=>{
    return(
        <>
            <StyleCard>
                <Conteudo>
                    <Link to={`/medidas/${projeto._id}`}>
                        <h4>{projeto.nome}</h4>
                        <img src={projeto.imagem} alt='imagem'/>
                        <Info>
                            <h6>Temperatura:&nbsp;<H5>{projeto.temperatura}ºC</H5></h6>
                            <h6>Vibração:&nbsp;<H5>{projeto.vibracao}</H5></h6>
                            <h6>Corrente:&nbsp;<H5>{projeto.corrente}A</H5></h6>
                            <h6>Rpm:&nbsp;<H5>{projeto.rpm}</H5></h6>
                        </Info>
                    </Link>
                </Conteudo>
            </StyleCard>
        </>
    )
}

export default Cards