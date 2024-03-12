import React, {useState} from 'react'
import {Container, Table, Image, Button} from 'react-bootstrap'
import styled from "styled-components";
import moment from "moment";
import { useApi } from '../hooks/useApi';
import CaixaDialogo from './CaixaDialogo';
import FormEdit from './FormEdit';
//import {deleteRegistro, editRegistro} from '../servicos/api'

const Foto = styled(Image)`
    height: 50px;

`;

function AdmDevices() {

    const del = ()=>{
        //deleteRegistro(id)
        console.log("escolheu deletar")
    }

    const ed = ()=>{
       // editRegistro()
       console.log("escolheu deletar")
    }
    
    const [escolha, setEscolha] = useState({
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
  
    const [header, setHeader] = useState()
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

    const editRegistro = (id, data)=>{
        const newRegDevice = {
            nome: data.nome,
            descricao: data.descricao,
            imagem: data.imagem
        }
        editRegistro(id, newRegDevice)
    }

    const deleteRegistro = (id)=>{
   
    }

    return (
        <Container>
                <Table striped bordered hover variant="dark">
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
                </Table>
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