import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.0.2:3000'
})

export default api