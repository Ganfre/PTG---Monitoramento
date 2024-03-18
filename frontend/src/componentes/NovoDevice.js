import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import styled from 'styled-components'
import {addRegistro} from '../servicos/api'

const Geral = styled.div`
    h6{
        color: white;
        font-weight: bold;
    }
`;

function NovoDevice() {

    const [nome, setNome] = useState()
    const [descricao, setDescricao] = useState()
    const [email, setEmail] = useState()
    const [imagem, setImagem] = useState()

    const data = {nome, descricao, email, imagem}

    function click(){
        addRegistro(data)
    }

  return (
    <Geral>
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label><h6>Email</h6></Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Insira o seu email" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                </Form.Group>

                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label><h6>Nome do Device</h6></Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Insira um nome para o device"
                        value={nome}
                        onChange={(e)=> setNome(e.target.value)}
                        />
                </Form.Group>

                <Form.Group className="mb-3" controlId="descricao">
                    <Form.Label><h6>Descriçao</h6></Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Descreva o uso do device"
                        value={descricao}
                        onChange={(e)=> setDescricao(e.target.value)} 
                        />
                </Form.Group>

                <Form.Group className="mb-3" controlId="foto">
                    <Form.Label><h6>Foto</h6></Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Insira uma imagem para o device"
                        value={imagem}
                        onChange={(e)=> setImagem(e.target.value)} 
                        />
                </Form.Group>

                <Button variant="primary" onClick={()=> click(data.email, data.nome, data.descricao, data.imagem)} >Salvar</Button>&nbsp;&nbsp;
                <Button variant="secondary" type="submit">Cancelar</Button>

            </Form>
        </Container>
    </Geral>
  )
}

export default NovoDevice