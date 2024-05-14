import axios from 'axios'

const apiSafeScreen = axios.create({
    baseURL: 'http://localhost:3001'
})

export default apiSafeScreen


