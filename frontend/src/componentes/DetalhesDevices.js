import React from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import moment from 'moment'
import styled from "styled-components";

const Pag = styled.div`
    padding-top: 3rem;
`;

const Geral = styled.div`
    background-color: white;
    width: 70%;
    min-height: 70vh;
    position: absolute;
    left: 15%;

    h2{
        padding-left: 1rem;
    }

    img{
        width: 200px;
        padding-left: 1rem;
    }
`;

const DetalhesDevice = ()=>{
    const {id} = useParams()
    const {data} = useApi(`/devices/${id}`)
    console.log(data)
    return(
        <Pag>
            <Geral>
                <h2>{data?.data?.message?.nome}</h2>
                <h2>{moment(data?.data?.message?.data).format('DD-MM-YYYY')}</h2>
                <h2>Consumo mensal</h2>
                <h2>Consumo diário</h2>
                <img src={data?.data?.message?.imagem} alt='imagem' />
            </Geral>
        </Pag>
    )
}

export default DetalhesDevice