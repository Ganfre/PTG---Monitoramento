import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, ModalTitle} from 'react-bootstrap'

function CaixaDialogo({show, setShow, escAtual, id, email, children}) {
    const acao =()=>{
        console.log(children)
        escAtual.callback(id)
        setShow(false)
    }
  return (
        <Modal 
            show={show}
            onHide={()=> setShow(false)}
            backdrop="static"
            keyboard={false}
        >
            <ModalHeader closeButton>
                <ModalTitle>
                    {escAtual.header}<br/>
                    {id}<br/>
                    {email}
                </ModalTitle>
            </ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter>
                    <Button variant={escAtual.variant} onClick={()=> setShow(false)}>Cancelar</Button>
                    <Button variant={escAtual.variant} onClick={()=> acao()}>{escAtual.label}</Button>
                </ModalFooter>
        </Modal>  
    )
}

export default CaixaDialogo