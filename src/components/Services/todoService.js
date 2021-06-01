import {todosApi} from "../../utils/API";

export const getTodos = async (userName) => {
    const response = await todosApi.get('/', {params: userName})
    return response.data
}

export const createTodo = async (text, token)=>{
    const response = await todosApi.post('/create', text, {params: token});
    return response.data;
}

export const updateTodo = async ({id, isChecked}, token) =>{
    const response = await todosApi.put(`/${id}/update`, {isChecked}, {params: token});
    return response.data;
}

export const deleteTodos = async (id, token) =>{
    await todosApi.delete(`/${id}/delete`, {params: token})
    return id;
}

export const deleteAllCheckedInDb = async (token)=>{
    await todosApi.delete('/deleteAllChecked', {params: token});
}

export const updateAllTodo = async (isChecked, token)=>{
    const response = await todosApi.put('/updateAll', {isChecked}, {params: token}) // todo изменить response на чтото более осознанное
    return response.data;
}

export const createUserRegistration = async (text) =>{
    await todosApi.post('/createUser', {...text})
}

export const userAutorisation = async (userNameAndPassword) =>{
    const userNameAndToken = await todosApi.get('/getUser', {params: userNameAndPassword})
    return userNameAndToken.data;
}

export const CheckTokenAPI = async (token)=>{
    const userNameAndToken = await todosApi.get('/chekToken', {params: token})
    return userNameAndToken.data;
}
