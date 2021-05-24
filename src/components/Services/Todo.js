import {todosApi} from "../../utils/API";

export const getTodos = async () => {
    const response = await todosApi.get('/')
    return response.data
}

export const createTodo = async (text)=>{
    const response = await todosApi.post('/create', {text});
    return response.data;
}

export const updateTodo = async ({id, isChecked}) =>{
    const response = await todosApi.put(`/${id}/update`, {isChecked});
    return response.data;
}

export const deleteTodos = async (id) =>{
    console.log('success', id);
    const response = await todosApi.delete(`/${id}/delete`)
    return id;
}

export const deleteAllCheckedInDb = async ()=>{
    const response = await todosApi.delete('/deleteAllChecked');
    return response.data;
}

export const updateAllTodo = async (isChecked)=>{
    const response = await todosApi.put('/updateAll', {isChecked})
    return response.data;
}

export const createUserRegistration = async (text) =>{
    const response = await todosApi.post('/createUser', {...text})
    return response.data;
}

export const userAutorisation = async (userNameAndPassword) =>{
    const response = await todosApi.get('/getUser', {params: userNameAndPassword})
    return response.data
}