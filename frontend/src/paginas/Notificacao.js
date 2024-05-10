import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cards from '../componentes/Cards';
import { useApi } from '../hooks/useApi';
import { useNavigate } from 'react-router-dom';
import Userfront from '@userfront/toolkit';

const ListaCards = styled.div`
    display: grid;
    grid-template-columns: 200px repeat(auto-fill, 200px);
    grid-column-gap: 5rem;
    grid-row-gap: 5rem 10rem;
`;

const ListaDevices = styled.div`
    min-height: 30vh;
    overflow: hidden;
    padding-left: 7rem;
    h1 {
        font-weight: bold;
        color: #111827;
        padding: 1rem 1rem 1rem 0rem;
    }
`;

const TextoNenhumDevice = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #808080;
    text-align: center;
    margin-top: 20px;
`;

const Medidas = () => {
    let navigate = useNavigate();
    useEffect(() => {
        if (!Userfront.accessToken()) {
            return navigate('/login');
        }
    });

    const { data } = useApi('/devices');

    const [projetosComValorVermelho, setProjetosComValorVermelho] = useState([]);

    useEffect(() => {
        if (data?.data?.message) {
            const projetosFiltrados = data.data.message.filter(projeto => {
                const ultimaMedida = projeto.medidas[projeto.medidas.length - 1];
                return ultimaMedida.temperatura > 85 || ultimaMedida.vibracao > 15 || ultimaMedida.corrente > 10 || ultimaMedida.rpm < 800;
            });
            setProjetosComValorVermelho(projetosFiltrados);
        }
    }, [data]);

    console.log(projetosComValorVermelho);

    return (
        <ListaDevices>
            <h1>Central de alertas</h1>
            {projetosComValorVermelho.length === 0 ? (
                <TextoNenhumDevice>Todos os dispositivos estão funcionando dentro dos parâmetros!</TextoNenhumDevice>
            ) : (
                <ListaCards>
                    {projetosComValorVermelho.map(projeto => (
                        <Cards key={projeto._id} projeto={projeto} />
                    ))}
                </ListaCards>
            )}
        </ListaDevices>
    );
};

export default Medidas;
