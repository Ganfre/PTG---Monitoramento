import React from 'react'
import styled from 'styled-components'
import FormContato from '../componentes/FormContato';

const ContStyled = styled.div`
    padding: 1rem 10rem;
    color: #353535;
    min-height: 90vh;

`;

const Title = styled.div`
    margin-bottom: 4rem;
    h1{
        color: black;
        font-weight: bold;
    }
`;

const Mensagens = ()=>{
    return(
        <ContStyled>
            <Title><h1>Mensagens</h1></Title>
            <FormContato />
        </ContStyled>
    )
}
export default Mensagens

