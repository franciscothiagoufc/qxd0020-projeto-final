import Axios from 'axios'
const port = '1337'
export const baseUrl = 'htts://localhost:${port}/api/'
export const timeOut =  1000
export const api = Axios.create({
    baseURL: '${baseUrl}',
    timeout: timeOut,
})