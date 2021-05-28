import {todosApi} from "../../utils/API";

export const getTodos = async (userName) => {
    const response = await todosApi.get('/', {params: userName})
    return response.data
}

export const createTodo = async (text)=>{
    const response = await todosApi.post('/create', text);
    return response.data;
}

export const updateTodo = async ({id, isChecked}) =>{
    const response = await todosApi.put(`/${id}/update`, {isChecked});
    return response.data;
}

export const deleteTodos = async (id) =>{
    await todosApi.delete(`/${id}/delete`)
    return id;
}

export const deleteAllCheckedInDb = async ()=>{
    await todosApi.delete('/deleteAllChecked');
}

export const updateAllTodo = async (isChecked)=>{
    const response = await todosApi.put('/updateAll', {isChecked}) // todo изменить response на чтото более осознанное
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
