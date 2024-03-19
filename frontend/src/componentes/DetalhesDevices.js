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

    let ultimasMedidas = [];
    if (data?.data?.message?.medidas) {
        ultimasMedidas = data.data.message.medidas.slice(-3);
    }

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
                    {ultimasMedidas.map(med => (
                        <tr>
                            <td style={med.temperatura > 85 ? {color: "red"}:{color: "white"}}>{med.temperatura}°C</td>
                            <td style={med.vibracao > 15 ? {color: "red"}:{color: "white"}}>{med.vibracao} Hz</td>
                            <td style={med.corrente > 10 ? {color: "red"}:{color: "white"}}>{med.corrente} A</td>
                            <td style={med.rpm < 800 ? {color: "red"}:{color: "white"}}>{med.rpm}</td>
                            <td>{med.data}</td>
                            <td>{med.hora}h</td> 
                        </tr>)
                    )}
                </tbody>
            </Table>
        </Container>
    )
}

export default DetalhesDevice