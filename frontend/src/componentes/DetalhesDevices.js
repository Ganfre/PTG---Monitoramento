import React from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import {Container, Table} from 'react-bootstrap';
import styled from "styled-components";
import Graph from "./Graficos";
//import moment from 'moment'

const Titulo = styled.div`
    h1{
        font-weight: bold;
        color: #111827;
        padding: 1rem 1rem 1rem 0rem;
    }
`;

const AdmContainer = styled.div`
    padding-left: 8rem;
    padding-right: 0.6rem;
`;

const DetalhesDevice = ()=>{
    const {id} = useParams()
    const {data} = useApi(`/devices/detalhes/${id}`)
    console.log(data)
    const medidas = data?.data?.message?.medidas || [];

    let ultimasMedidas = [];
    if (data?.data?.message?.medidas) {
        ultimasMedidas = data.data.message.medidas.slice(-5);
    }

    return(
        <AdmContainer>
            <Container>
                <Titulo><h1>{data?.data?.message?.nome}</h1></Titulo>
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
                    <div>
                        <Graph data={medidas.map((med) => ({ data: med.data, value: med.temperatura }))} title="Temperatura (°C)" />
                        <Graph data={medidas.map((med) => ({ data: med.data, value: med.vibracao }))} title="Vibração (Hz)" />
                        <Graph data={medidas.map((med) => ({ data: med.data, value: med.corrente }))} title="Corrente (A)" />
                        <Graph data={medidas.map((med) => ({ data: med.data, value: med.rpm }))} title="RPM" />
                    </div>
            </Container>
        </AdmContainer>
    )
}

export default DetalhesDevice