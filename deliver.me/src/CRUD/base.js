import Axios from 'axios'
export const baseUrl = 'htts://localhost:${port}/api/'
export const timeOut =  1000
export const api = Axios.create({
    baseURL: "http://localhost:1337/api/",
    timeout: timeOut,
})