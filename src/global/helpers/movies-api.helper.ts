import axios from "axios";

export const moviesApi = axios.create({
    baseURL: process.env.MOVIE_API_URL,
    params: {
        "api_key": process.env.MOVIE_API_KEY,
        "language": "pt-BR"
    }
})