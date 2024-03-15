import React from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import {Container, Table} from 'react-bootstrap'
import styled from "styled-components";
//import moment from 'moment'

const Titulo = styled.div`
    h4{
        padding-left: 1rem;
        font-weight: bold;
        color: yellow;
    }
`;

const DetalhesDevice = ()=>{
    const {id} = useParams()
    const {data} = useApi(`/devices/detalhes/${id}`)
    console.log(data)
    return(
        <Container>
            <Titulo><h4>{data?.data?.message?.nome}</h4></Titulo>
            <Table striped bordered hover variant="dark">
            <thead>
                    <tr>
                        <th>Temperatura</th>
                        <th>Vibração</th>
                        <th>Corrente</th>
                        <th>RPM</th>
                        <th>Data</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.message?.medidas?.map(med =>{
                        return(<tr>
                            <td>{med.temperatura}</td>
                            <td>{med.vibracao}</td>
                            <td>{med.corrente}</td>
                            <td>{med.rpm}</td>
                            <td>{med.data}</td>
                            <td>{med.hora}'</td> 
                        </tr>)
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default DetalhesDevice