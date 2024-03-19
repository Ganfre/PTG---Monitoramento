import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCard = styled.div`
    box-sizing: border-box;
    background-color: #58617B;
    border-color: black;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden; 
    a{
        text-decoration: none;
    }

`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    h6{
        padding-left: 1rem;
        color: black;
        font-weight: bold;
        line-height: 12px;
     }
    h5{
        text-align: center;
        color: white;
        font-weight: normal;
    }
    h4{
        text-align: center;
        color: white;
        font-weight: normal;
        padding-top: 6px;
        font-weight: bold;
    }
    h6T{
        text-align: center;
        color: yellow;
        font-weight: bold;
        font-size: 14px;
        line-height: 5px;
        padding-bottom: 10px;
    }
    lb{
        color: white; 
    }
    img{
        padding-bottom: 1rem;
        max-width:200px;
        max-height:200px;
        width: auto;
        height: auto;
    }
`;

const Info = styled.div`
    text-decoration: none;
    padding-bottom: 8px;
`;

const Cards = ({projeto})=>{
    console.log(projeto)
    var ultimo = projeto.medidas.length
    console.log(ultimo)
    return(
        <StyledCard>
            <Link to={`/medidas/${projeto._id}`}>
                <Content>
                    <h4>{projeto.nome}</h4>
                    <img src= {projeto.imagem} alt="Description"/>
                    <h5>Medidas Atuais:</h5>
                    <h6T>{projeto.medidas[ultimo-1].data} {projeto.medidas[ultimo-1].hora}</h6T>
                    <h6T>{projeto.medidas[ultimo-1].netst}</h6T>
                    <Info>
                        <h6>Temperatura: <span style={{color: projeto.medidas[ultimo-1].temperatura > 85 ? "red" : "white"}}>{projeto.medidas[ultimo-1].temperatura}°C</span></h6>
                        <h6>Vibração: <span style={{color: projeto.medidas[ultimo-1].vibracao > 15 ? "red" : "white"}}>{projeto.medidas[ultimo-1].vibracao}Hz</span></h6>
                        <h6>Corrente: <span style={{color: projeto.medidas[ultimo-1].corrente > 10 ? "red" : "white"}}>{projeto.medidas[ultimo-1].corrente}A</span></h6>
                        <h6>RPM: <span style={{color: projeto.medidas[ultimo-1].rpm < 800 ? "red" : "white"}}>{projeto.medidas[ultimo-1].rpm}rpm</span></h6>
                    </Info>
                </Content>
            </Link>
        </StyledCard>
    )
}
export default Cards