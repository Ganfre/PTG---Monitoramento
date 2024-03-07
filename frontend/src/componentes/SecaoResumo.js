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
`;

const SecaoResumo = ()=>{
    return(
        <Inicio>
            <Descricao>
                <h1>PTG - SensorSync</h1>
                <h2>Automação Industrial</h2>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when 
                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
                    of letters, as opposed to using 'Content here, content here', making it look like readable English. Many 
                    desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a 
                    search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved 
                    over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
                <button>Entre em contato</button>
            </Descricao>
        </Inicio>
    )
}

export default SecaoResumo