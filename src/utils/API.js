import axios from "axios";

export const todosApi = axios.create({
    baseURL: '/products'});

