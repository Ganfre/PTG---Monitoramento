import axios from 'axios'

const api = axios.create({
    baseURL: '/api'
})

export default api

export const deleteRegistro = (id)=>{
    console.log('chamada de del')
}

export const editRegistro = ()=>{
    console.log('chamada de edit')
}