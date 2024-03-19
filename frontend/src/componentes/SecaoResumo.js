import React from 'react';
import styled from 'styled-components';

const Inicio = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: black;
`;

const Descricao = styled.div`
    flex: 1;
    padding-right: 5rem;
    h1{
        font-weight: bold;
        font-size: 3rem;
        color: white;
    }
    h2{
        font-weight: bold;
        font-size: 2rem;
        color: white;
    }
    p{
        font-size: 20px;
        text-align: justify;
    }
`;

const SecaoResumo = ()=>{
    return(
        <Inicio>
            <Descricao>
                <h1>PTG - SensorSync</h1>
                <h2>Automação Industrial</h2>
                <p>
                    Plataforma de Monitoramento de Equipamentos Industriais em Tempo Real: Nosso projeto oferece uma solução para 
                    o monitoramento contínuo de equipamentos industriais. Através de nossa plataforma, é possível acompanhar em tempo 
                    real o funcionamento e desempenho dos seus equipamentos. Detecte falhas e anomalias instantaneamente, permitindo 
                    uma intervenção rápida e eficaz. Otimize a eficiência operacional e minimize o tempo de inatividade com nosso sistema 
                    de monitoramento em tempo real.
                </p>
            </Descricao>
        </Inicio>
    )
}

export default SecaoResumo