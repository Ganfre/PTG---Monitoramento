import React, {useState} from 'react'
import {Container, Table, Image, Button} from 'react-bootstrap'
import styled from "styled-components";
import moment from "moment";
import { useApi } from '../hooks/useApi';
import CaixaDialogo from './CaixaDialogo';
import FormEdit from './FormEdit';
import { editRegistro, deleteRegistro } from '../servicos/api';


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

function AdmDevices() {
    
    const del = (id)=>{
        deleteRegistro(id)
    }

    const ed = (id, data)=>{
        editRegDevice(id, data)
    }
    
    const [escolha] = useState({
        delete:{
            header: 'Confirma Exclusão?',
            variant: 'danger',
            label: 'OK',
            mostraBody: true,
            body: 'Tem certeza que deseja deletar o registro?',
            callback: del
        },
        edit:{
            header: 'Edita Device',
            variant: 'primary',
            label: 'Salvar',
            mostraBody: false,
            callback: ed
        }
    })
    //const [header, setHeader] = useState()
    const [nome, setNome] = useState()
    const [descricao, setDescricao] = useState()
    const [imagem, setImagem] = useState()
    const [id, setId] = useState()
    const [email, setEmail] = useState()
    const [show, setShow] = useState(false)
    const {data} = useApi('/devices')

    const [escAtual, setEscAtual] = useState({
        header: '',
        variant: '',
        label: '',
        body: '',
        email: '',
        id: ''
    })

    const manipulaShow = (device, esc)=>{
        setEscAtual(esc)
        setShow(true)
        setId(device._id)
        setEmail(device.email)
        setNome(device.nome)
        setDescricao(device.descricao)
        setImagem(device.imagem)
    }

    const editRegDevice = (id, data)=>{
        const newRegDevice = {
            nome: data.nome,
            descricao: data.descricao,
            imagem: data.imagem
        }
        editRegistro(id, newRegDevice)
    }

    return (
        <Container>
                <CustomTable striped bordered hover>
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Device ID</th>
                            <th>Nome</th>
                            <th>Data de Cadastro</th>
                            <th>Ações</th>
                        </tr>           
                    </thead>
                    <tbody>
                        {data?.data?.message?.map(item =>{
                            return(
                                <tr>
                                    <td><Foto src={item.imagem}></Foto></td>
                                    <td>{item._id}</td>
                                    <td>{item.nome}</td>
                                    <td>{moment(item.data).format('DD-MM-YYYY')}</td>
                                    <td>
                                        <Button variant="info" onClick={()=> manipulaShow(item, escolha.edit)}>Editar</Button>&nbsp;&nbsp;
                                        <Button variant="danger" onClick={()=> manipulaShow(item, escolha.delete)}>Deletar</Button>
                                    </td>
                                </tr>)
                        })}
                    </tbody>
                </CustomTable>
                <CaixaDialogo show={show} setShow={setShow} escAtual={escAtual} id={id} email={email}>
                    {escAtual.mostraBody && escAtual.body}

                    {!escAtual.mostraBody && (
                        <FormEdit
                            nome={nome}
                            setNome={setNome}
                            id={id}
                            setId={setId}
                            email={email}
                            setEmail={setEmail}
                            descricao={descricao}
                            setDescricao={setDescricao}
                            imagem={imagem}
                            setImagem={setImagem}
                        />
                    )}
                </CaixaDialogo>                    
        </Container>
  )
}

export default AdmDevices 