import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        'Accept': 'aplication/json',
        'Content-Type': 'multipart/form-data'
    }
})

export default Api;