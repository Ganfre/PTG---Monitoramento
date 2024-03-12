import React from "react";
import {useApi} from '../hooks/useApi'
import {Table, Image} from 'react-bootstrap';
import styled from "styled-components";
import moment from "moment";

const Foto = styled(Image)`
    height: 50px;

`;

const ListaDevices = ()=>{
    const {data} = useApi('/devices')
    return(
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Device</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.message?.map(item =>{
                        return(
                            <tr>
                                <td><Foto src={item.imagem}></Foto></td>
                                <td>{item.nome}</td>
                                <td>{moment(item.data).format('DD-MM-YYYY')}</td>
                            </tr>)
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default ListaDevices