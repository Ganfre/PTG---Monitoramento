import React, { useEffect } from 'react';
import styled from 'styled-components';
import {Tabs, Tab, Container} from 'react-bootstrap'
import ListaDevices from '../componentes/ListaDevices';
import AdmDevices from '../componentes/AdmDevices';
//import FormEdit from '../componentes/FormEdit';
import { useNavigate } from 'react-router-dom';
import NovoDevice from '../componentes/NovoDevice';
import Userfront from '@userfront/toolkit';

const Descricao = styled.div`
    flex: 1;
    padding-right: 5rem;
    z-index: 5;

    h1{
        font-weight: bold;
        color: #111827;
        padding: 1rem 1rem 1rem 0rem;
    }
`;

const AdmContainer = styled.div`
    padding-left: 6rem;
    padding-right: 1rem;

    .nav-link {
        color: #111827;
    }
`;

const Admin = ()=>{
    let navigate = useNavigate()
    useEffect(()=>{
        if(!Userfront.accessToken()){
            return navigate('/login')
        }
    })
    return(
        <AdmContainer>
            <Container>
                <Descricao>
                    <h1>Administração</h1>
                </Descricao>
                <Tabs
                    defaultActiveKey="devices" id="adm" className="mb-1">
                    <Tab eventKey="devices" title="Meus Devices">
                        <ListaDevices />
                    </Tab>
                    <Tab eventKey="detalhes" title="Detalhes">
                        <AdmDevices />
                    </Tab>
                    <Tab eventKey="novo" title="Novo Device">
                        <NovoDevice />
                    </Tab>
                </Tabs>
            </Container>
      </AdmContainer>
    )
}

export default Admin