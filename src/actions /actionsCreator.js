import {
    ADD_TODO_TO_DB,
    GET_ALL_FROM_DB,
    UPDATE_ALL_DB,
    DELETE_CHECKED_FROM_DB,
    DELETE_TODO_FROM_DB,
    UPDATE_TODO_IN_DB,
    GET_TODO_FROM_DB,
    CREATE_NEW_USER,
    FAILED,
    SUCCESS, LOGIN_USER,
} from './actions';
import {
    createTodo,
    deleteTodos,
    getTodos,
    updateTodo,
    updateAllTodo,
    deleteAllCheckedInDb,
    createUserRegistration,
    userAutorisation
} from "../components/Services/Todo";

export const failed = (error) => {
    return {type: FAILED, error};
}

export const success = () => {
    return {type: SUCCESS};
}


export const getAllFromDb = (payload) => {
    return {type: GET_ALL_FROM_DB, payload}
}
export const getTodo = (userName) => async (dispatch) => {
    try {
        // dispatch(pending)
        const data = await getTodos(userName)
        console.log('received data', data)
        dispatch(getAllFromDb(data))
    } catch (e) {
        dispatch(failed(e))
    }
}


export const createToDoAction = (data) => {
    return {type: ADD_TODO_TO_DB, payload: data}
}
export const addTodoSome = (text) => async (dispatch) => {
    try {
        const data = await createTodo(text);
        dispatch(createToDoAction(data));
    } catch (e) {
        dispatch(failed(e));
    }
}

export const update = (data) => {
    return {type: UPDATE_TODO_IN_DB, payload: data}
}
export const updateDB = (id, isChecked) => async (dispatch) => {
    try {
        const data = await updateTodo({id, isChecked: !isChecked});
        console.log('data' ,data)
        dispatch(update(data))

    } catch (e) {
        dispatch(failed(e))
    }
}

export const Delete = (id) => {
    return{type: DELETE_TODO_FROM_DB, payload: id}
}
export const deleteFromDb = (id) => async (dispatch)=>{
    try{
        const data = await deleteTodos(id);
        dispatch(Delete(data))
    }catch (e){
        dispatch(failed(e))
    }
}

export const deleteAllChecked = ()=>{
    return {type: DELETE_CHECKED_FROM_DB};
}
export const deleteAllCheckedFromDb = () => async (dispatch)=>{
    try{
        await deleteAllCheckedInDb()
        dispatch(deleteAllChecked())
    }catch (e){
        dispatch(failed(e))
    }
}

export const updateAll = (isChecked)=>{
    return {type:  UPDATE_ALL_DB, payload: isChecked}
}

export const updateAllDb = (isChecked) => async (dispatch)=>{
    try{
        const data = await updateAllTodo(isChecked);
        dispatch(updateAll(data));
    }catch (e){
       dispatch(failed(e))
    }
}

export const createUserAction = (text) => {
    return {type: CREATE_NEW_USER, payload: text}
}
export const createNewUser = (text) => async (dispatch) => {
    try {
       const userData = await createUserRegistration(text);
       dispatch(createUserAction(userData))
    } catch (e) {
        dispatch(failed(e))
    }
}

export const authorizationUserAction = (token) =>{
    return {type: LOGIN_USER, payload: token}
}
export const authorizationUser = (userNameAndPassword) => async (dispatch) =>{
    try{
        const objectWithTokenAndUserName = await userAutorisation(userNameAndPassword)
        dispatch(authorizationUserAction(objectWithTokenAndUserName))
    }catch (e){
        dispatch(failed(e))
    }
}
