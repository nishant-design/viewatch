import axios from 'axios';

// base URL to make request to movie DB:
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance;