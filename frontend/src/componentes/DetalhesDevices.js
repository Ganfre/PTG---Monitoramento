import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';
import styled from "styled-components";
import Graph from "./Graficos";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTable } from '@fortawesome/free-solid-svg-icons';
import FilterComponent from "./Filtro";

const Titulo = styled.div`
    h1 {
        font-weight: bold;
        color: #111827;
        padding: 0rem 1rem 1rem 0rem;
    }
`;

const AdmContainer = styled.div`
    padding-left: 8rem;
    padding-right: 0.6rem;
`;

const BackButton = styled.button`
    background-color: transparent;
    color: #111827;
    border: none;
    padding: 5px 0px 0px 0px;
    cursor: pointer;
    font-size: 25px;
`;

const Legenda = styled.button`
    background-color: transparent;
    color: gray;
    border: none;
    padding: 5px 0px 0px 0px;
    cursor: pointer;
    font-size: 25px;
`;

const LinhaTitulo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const Popup = styled.div`
    position: absolute;
    top: 83px;
    right: 20px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    display: ${props => (props.show ? 'block' : 'none')};
`;

const DetalhesDevice = () => {
    const { id } = useParams();
    const { data } = useApi(`/devices/detalhes/${id}`);
    const medidas = data?.data?.message?.medidas || [];
    const [filtroData, setFiltroData] = useState(null);
    const [showPopup, setShowPopup] = useState(false);


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

    const goBack = () => {
        window.history.back();
    };

    const filtrarPorData = (medidasFiltradas, dataInicio, dataFim) => {
        const dataInicioFiltro = new Date(dataInicio);
        const dataFimFiltro = new Date(dataFim);

        return medidasFiltradas.filter(medida => {
            const dataMedida = new Date(medida.data.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2-$1-$3'));
            return dataMedida >= dataInicioFiltro && dataMedida <= dataFimFiltro;
        });
    };

    return (
        <AdmContainer>
            <Container>
                <Row>
                    <Col md={12}>
                        <BackButton onClick={goBack}><FontAwesomeIcon icon={faArrowLeft} /></BackButton>
                    </Col>
                </Row>
                <LinhaTitulo>
                    <Titulo><h1>{data?.data?.message?.nome}</h1></Titulo>
                    <Legenda 
                        onMouseEnter={() => setShowPopup(true)}
                        onMouseLeave={() => setShowPopup(false)}
                    >
                        <FontAwesomeIcon icon={faTable} style={{ marginRight: '10px' }} />
                        <Popup show={showPopup}>
                            <Table hover>
                                <thead>
                                    <tr>
                                        <th colSpan="2">
                                            <h4 style={{ color: 'black', fontWeight: 'bold' }}>Parâmetros</h4>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody style={{ fontSize: '16px' }}>
                                    <tr>
                                        <th>Temperatura</th>
                                        <td>85°C</td>
                                    </tr>
                                    <tr>
                                        <th>Vibração</th>
                                        <td>15Hz</td>
                                    </tr>
                                    <tr>
                                        <th>Corrente</th>
                                        <td>10A</td>
                                    </tr>
                                    <tr>
                                        <th>Rpm</th>
                                        <td>800rpm</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Popup>
                    </Legenda>
               </LinhaTitulo>
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
                                                <td style={med.temperatura > 85 ? { color: "red", fontWeight: 'bold' } : { color: "white" }}>{med.temperatura}°C</td>
                                                <td style={med.vibracao > 15 ? { color: "red", fontWeight: 'bold' } : { color: "white" }}>{med.vibracao} Hz</td>
                                                <td style={med.corrente > 10 ? { color: "red", fontWeight: 'bold' } : { color: "white" }}>{med.corrente} A</td>
                                                <td style={med.rpm < 800 ? { color: "red", fontWeight: 'bold' } : { color: "white" }}>{med.rpm}</td>
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
                                <FilterComponent setFiltroData={setFiltroData} />
                                <Row>
                                    <Col md={6}>
                                        {}
                                        <Graph data={filtrarPorData(medidas, filtroData?.dataInicio, filtroData?.dataFim).map((med) => ({ data: med.data, value: med.temperatura }))} title="Temperatura (°C)" />
                                    </Col>
                                    <Col md={6}>
                                        <Graph data={filtrarPorData(medidas, filtroData?.dataInicio, filtroData?.dataFim).map((med) => ({ data: med.data, value: med.vibracao }))} title="Vibração (Hz)" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Graph data={filtrarPorData(medidas, filtroData?.dataInicio, filtroData?.dataFim).map((med) => ({ data: med.data, value: med.corrente }))} title="Corrente (A)" />
                                    </Col>
                                    <Col md={6}>
                                        <Graph data={filtrarPorData(medidas, filtroData?.dataInicio, filtroData?.dataFim).map((med) => ({ data: med.data, value: med.rpm }))} title="RPM" />
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
