import axios from 'axios'
const httpClient = axios.create({
    baseURL: "http://localhost:31779"
});
export {httpClient};