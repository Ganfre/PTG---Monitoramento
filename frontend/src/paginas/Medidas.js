import React from 'react';
import styled from 'styled-components';
import Cards from '../componentes/Cards';
import {useApi} from '../hooks/useApi';

const ListaCards = styled.div`
    display: grid;
    grid-template-columns: 200px repeat(auto-fill, 200px);
    grid-column-gap: 5rem;
    grid-row-gap: 5rem 10rem;
`;

const ListaDevices = styled.div`
    min-height: 30vh;
    overflow: hidden;
    padding: 5rem 10rem;
`;

const Medidas = ()=>{
    const {data} = useApi('/devices')
    console.log(data)
    return(
        <ListaDevices>
            <ListaCards>
                {data?.data?.message?.map(projeto =>{
                    return(<Cards key={projeto._id}projeto={projeto} />)
                })}
            </ListaCards>
        </ListaDevices>
    )
}

export default Medidas