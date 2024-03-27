import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import styled from 'styled-components'
import { sendMail } from '../servicos/api';

const Label = styled.div`
    color: black;
`;

const StyleFomr = styled.div`
    display: block;
    width: 900px;
    padding-left: 2rem;
    padding-bottom: 2rem;
`;

const FormContato=()=> {
        const [status, setStatus] = useState('Enviar')
        const [email, setEmail] = useState()
        const [nome, setNome] = useState()
        const [mensagem, setMensagem] = useState()

        function manipulaSubmit(e){
            e.preventDefault()
            setStatus('Enviando...')
            const newSendEmail ={
                email: email,
                nome: nome,
                mensagem: mensagem
            }
            sendMail(newSendEmail)
            console.log(newSendEmail)
        }

        return(
            <Container>
                <StyleFomr>
                    <Form id='form' onSubmit={manipulaSubmit}>
                        <Form.Group className="mb-3" controlId="email"></Form.Group>
                            <Form.Label> <Label>Email:</Label></Form.Label>
                            <Form.Control 
                                type="email"
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
                        />

                        <Form.Group className="mb-3" controlId="nome"></Form.Group>
                            <Form.Label> <Label>Nome:</Label></Form.Label>
                            <Form.Control 
                                type="text"
                                value={nome}
                                onChange={(e)=> setNome(e.target.value)}
                        />                       

                        <Form.Group className="mb-3" controlId="mensagem"></Form.Group>
                            <Form.Label> <Label>Mensagem:</Label></Form.Label>
                            <Form.Control 
                                as='textarea' rows='2'
                                value={mensagem}
                                onChange={(e)=> setMensagem(e.target.value)}
                        />                      
                        <br/>
                        <Button variant="primary" type="submit">{status}</Button>
                    </Form>
                </StyleFomr>
            </Container>
        )   
}


export default FormContato



