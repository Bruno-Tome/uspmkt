import axios from 'axios';

const api = axios.create({
    baseURL: 'http://ec2-35-180-197-82.eu-west-3.compute.amazonaws.com:3001/api',
});

export default api;

/*

GET:

base_url/products       =>  retorna todos os produtos
base_url/products/:id   =>  retorna o produto com o id especificado

POST:

base_url/products       =>  adiciona produto

PUT:

base_url/products/:id   => atualiza produto

DELETE:

base_url/products/:id   => deleta produto

*/