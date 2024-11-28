import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '5b096c7fa77ea304ff48bf2f2463181b',
        language: 'pt-BR',
        page: 1
    }
})

export default api