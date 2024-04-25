import React, { useState } from "react";
import { Button } from 'react-bootstrap';

const FilterComponent = ({ setFiltroData }) => {
    const [dataInicio, setDataInicio] = useState("");
    const [dataFim, setDataFim] = useState("");

    const handleFiltrar = () => {
        setFiltroData({ dataInicio, dataFim });
    };

    return (
        <div style={{paddingBottom: "20px"}}>
            <label style={{paddingRight: "5px"}} htmlFor="dataInicio">Data de Início:</label>
            <input
                type="date"
                id="dataInicio"
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
            />
            <label style={{paddingRight: "5px", paddingLeft: "15px"}} htmlFor="dataFim">Data de Fim:</label>
            <input
                type="date"
                id="dataFim"
                value={dataFim}
                onChange={(e) => setDataFim(e.target.value)}
            />
            <div style={{ display: "inline-block", paddingLeft: "15px"}}>
                <Button variant="primary" onClick={handleFiltrar}>Filtrar</Button>
            </div>
        </div>
    );
};

export default FilterComponent;
