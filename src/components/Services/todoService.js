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
    console.log('success', id);
    const response = await todosApi.delete(`/${id}/delete`) // todo изменить response на чтото более осознанное
    return id;
}

export const deleteAllCheckedInDb = async ()=>{
    const response = await todosApi.delete('/deleteAllChecked'); // todo изменить response на чтото более осознанное
    return response.data;
}

export const updateAllTodo = async (isChecked)=>{
    const response = await todosApi.put('/updateAll', {isChecked}) // todo изменить response на чтото более осознанное
    return response.data;
}

export const createUserRegistration = async (text) =>{
    const response = await todosApi.post('/createUser', {...text}) // todo изменить response на чтото более осознанное
    return response.data;
}

export const userAutorisation = async (userNameAndPassword) =>{
    const response = await todosApi.get('/getUser', {params: userNameAndPassword}) // todo изменить response на чтото более осознанное
    return response.data;
}

export const CheckTokenAPI = async (token)=>{
    const response = await todosApi.get('/chekToken', {params: token}) // todo изменить response на чтото более осознанное
    return response.data;
}
