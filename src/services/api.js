import axios from 'axios';

const api = axios.create({
    baseURL: 'http://ec2-35-180-197-82.eu-west-3.compute.amazonaws.com:3001/api',
});

export default api;