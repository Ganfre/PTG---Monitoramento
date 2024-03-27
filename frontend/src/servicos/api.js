import axios from 'axios'

const api = axios.create({
    baseURL: '/api'
})
export default api

export const deleteRegistro = (id)=>{
    axios.delete(`/api/devices/${id}`)
            .then(response => {
                console.log(response)
                window.location.reload()
            })
            .catch(err => console.log(err))
}

 export const editRegistro = (id, {nome, descricao, imagem})=>{
     axios.patch(`/api/devices/${id}`, {nome, descricao, imagem})
        .then(response =>{
            console.log("Editado", response)
            window.location.reload()
        })
        .catch(err => console.log(err))
}

export const addRegistro = ({nome, email, descricao, imagem})=>{
    axios.post(`/api/devices`, {nome, email, descricao, imagem})
    .then(response => {
        console.log('Adicionado', response)
        window.location.reload()
    })
    .catch(err => console.log(err))
}

export const sendMail = ({ nome, email, mensagem }) => {
    return axios.post('/api/devices/send', { email, nome, mensagem })
        .then(res => {
            console.log('Enviado', res);
            //window.location.assign('http://localhost:3000');
            return res.data;
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
}