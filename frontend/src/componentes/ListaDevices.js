import React from "react";
import {useApi} from '../hooks/useApi'
import {Table, Image} from 'react-bootstrap';
import styled from "styled-components";
import moment from "moment";

const Foto = styled(Image)`
    height: 50px;
`;

const CustomTable = styled(Table)`
    &.table {
        background-color: #444;
        color: #111827;
        border-color: gray;
    }
    thead {
        background-color: #555;
    }
    tbody {
        tr {
            &:nth-child(even) {
                background-color: #444;
            }
            &:nth-child(odd) {
                background-color: #333;
            }
            td {
                color: #111827;
            }
        }
    }
`;

const ListaDevices = ()=>{
    const {data} = useApi('/devices')
    return(
        <div>
            <CustomTable striped bordered hover>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Descrição</th>
                        <th>Device</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.message?.map(item =>{
                        return(
                            <tr>
                                <td><Foto src={item.imagem}></Foto></td>
                                <td>{item.descricao}</td>
                                <td>{item.nome}</td>
                                <td>{moment(item.data).format('DD-MM-YYYY')}</td>
                            </tr>)
                    })}
                </tbody>
            </CustomTable>
        </div>
    )
}

export default ListaDevices