import React from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';
import styled from "styled-components";
import Graph from "./Graficos";

const Titulo = styled.div`
    h1 {
        font-weight: bold;
        color: #111827;
        padding: 1rem 1rem 1rem 0rem;
    }
`;

const AdmContainer = styled.div`
    padding-left: 8rem;
    padding-right: 0.6rem;
`;

const DetalhesDevice = () => {
    const { id } = useParams();
    const { data } = useApi(`/devices/detalhes/${id}`);
    const medidas = data?.data?.message?.medidas || [];

    const ultimasCincoMedidas = medidas.slice(-5);

    const exportToCsv = () => {
        const csvContent = "data:text/csv;charset=utf-8," +
            medidas.map(row => Object.values(row).join(",")).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "todas_medidas.csv");
        document.body.appendChild(link);
        link.click();
    };

    return (
        <AdmContainer>
            <Container>
                <Titulo><h1>{data?.data?.message?.nome}</h1></Titulo>
                <Row>
                    <Col md={12}>
                        <Card>
                            <Card.Header>Últimas Medidas</Card.Header>
                            <Card.Body>
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
                                        {ultimasCincoMedidas.map(med => (
                                            <tr key={med.data + med.hora}>
                                                <td style={med.temperatura > 85 ? { color: "red" } : { color: "white" }}>{med.temperatura}°C</td>
                                                <td style={med.vibracao > 15 ? { color: "red" } : { color: "white" }}>{med.vibracao} Hz</td>
                                                <td style={med.corrente > 10 ? { color: "red" } : { color: "white" }}>{med.corrente} A</td>
                                                <td style={med.rpm < 800 ? { color: "red" } : { color: "white" }}>{med.rpm}</td>
                                                <td>{med.data}</td>
                                                <td>{med.hora}h</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <Button variant="primary" onClick={exportToCsv}>Exportar CSV</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Card>
                            <Card.Header>Gráficos</Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Graph data={medidas.map((med) => ({ data: med.data, value: med.temperatura }))} title="Temperatura (°C)" />
                                    </Col>
                                    <Col md={6}>
                                        <Graph data={medidas.map((med) => ({ data: med.data, value: med.vibracao }))} title="Vibração (Hz)" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Graph data={medidas.map((med) => ({ data: med.data, value: med.corrente }))} title="Corrente (A)" />
                                    </Col>
                                    <Col md={6}>
                                        <Graph data={medidas.map((med) => ({ data: med.data, value: med.rpm }))} title="RPM" />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </AdmContainer>
    )
}

export default DetalhesDevice;
