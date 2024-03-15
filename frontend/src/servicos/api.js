import axios from 'axios'

const api = axios.create({
    baseURL: '/api'
})
export default api

/* export const deleteRegistro = (id)=>{
    axios.delete(`/api/devices/${id}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
} */

export const editRegistro = ()=>{
    console.log('chamada de edit')
}