import React from 'react';
import styled from 'styled-components';
import {Tabs, Tab, Container} from 'react-bootstrap'
import ListaDevices from '../componentes/ListaDevices';
import AdmDevices from '../componentes/AdmDevices';
import FormEdit from '../componentes/FormEdit';

const Descricao = styled.div`
    flex: 1;
    padding-right: 5rem;
    background: black;
    z-index: 5;

    h1{
        padding-left: 1rem;
        font-weight: bold;
        color: yellow;
    }
`;

const Admin = ()=>{
    return(
        <Container>
        <Descricao>
            <h1>Administração</h1>
        </Descricao>
        <Tabs
            defaultActiveKey="profile" id="adm" className="mb-3">
            <Tab eventKey="devices" title="Meus Devices">
                <ListaDevices />
            </Tab>
            <Tab eventKey="detalhes" title="Detalhes">
                <AdmDevices />
            </Tab>
            <Tab eventKey="novo" title="Novo Device">
                <h2>Novo Device</h2>
            </Tab>
        </Tabs>
      </Container>
    )
}

export default Admin