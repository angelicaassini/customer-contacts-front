import axios from "axios"

export interface iResponseApi {
    status: string,
    message: string
}

const apiBackend = axios.create({
    baseURL: "http://localhost:3001",
    timeout: 10000,
})
export default apiBackend