import React from 'react'
import {Form, Container} from 'react-bootstrap'
import styled from 'styled-components'

function FormEdit({nome, setNome, descricao, setDescricao, imagem, setImagem}) {
  return (
    <Container>
        <Form>
            <Form.Group className="mb-3" controlId="nome">
                <Form.Label>Nome do Device</Form.Label>
                <Form.Control 
                        type="text" 
                        value={nome}
                        onChange={(e)=> setNome(e.target.value)}
                        placeholder="Insira um nome para o device" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="descricao">
                <Form.Label>Descrição</Form.Label>
                <Form.Control 
                    as='textarea' row='2' 
                    value={descricao}
                    onChange={(e)=> setDescricao(e.target.value)}
                    placeholder="Descreva o uso do device" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="imagem">
                <Form.Label>Foto</Form.Label>
                <Form.Control 
                type='text' 
                value={imagem}
                onChange={(e)=> setImagem(e.target.value)}
                placeholder="Coloque uma imagem para o device" />
            </Form.Group>
        </Form>
    </Container>
  )
}

export default FormEdit