import {
    ADD_TODO_TO_DB,
    GET_ALL_FROM_DB,
    UPDATE_ALL_DB,
    DELETE_CHECKED_FROM_DB,
    DELETE_TODO_FROM_DB,
    UPDATE_TODO_IN_DB,
    CREATE_NEW_USER,
    FAILED,
    SUCCESS, LOGIN_USER, VALID_USER,
} from './actions';
import {
    createTodo,
    deleteTodos,
    getTodos,
    updateTodo,
    updateAllTodo,
    deleteAllCheckedInDb,
    createUserRegistration,
    userAutorisation, CheckTokenAPI
} from "../components/Services/todoService";
const userData = JSON.parse(localStorage.getItem('userData'))

export const failed = (error) => {
    return {type: FAILED, payload: error};
}

export const success = () => {
    return {type: SUCCESS};
}

export const getAllFromDb = (payload) => {
    return {type: GET_ALL_FROM_DB, payload}
}
export const getTodo = () => async (dispatch) => {
    try {
        const data = await getTodos(userData)
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

        const data = await createTodo(text, userData);
        console.log(text)
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
        const data = await updateTodo({id, isChecked: !isChecked}, userData);
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
        const data = await deleteTodos(id, userData);
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
        await deleteAllCheckedInDb(userData)
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
        const data = await updateAllTodo(isChecked, userData);
        dispatch(updateAll());
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

export const authorizationUserAction = (tokenAndUserName) =>{
    return {type: LOGIN_USER, payload: tokenAndUserName}
}
export const authorizationUser = (userNameAndPassword) => async (dispatch) =>{
    try{
       const tokenAndUserName = await userAutorisation(userNameAndPassword);
       dispatch(authorizationUserAction(tokenAndUserName));
       localStorage.setItem('userData', JSON.stringify(tokenAndUserName));
    }catch (e){
        console.log(e)
        dispatch(failed(e))
    }
}

export const isValidTokenAction = (userData) =>{
    return {type: VALID_USER, payload: userData}
}
export const checkToken = (tokens) => async (dispatch)=>{
    try{
        const userData = await CheckTokenAPI(tokens);
        dispatch(isValidTokenAction(userData))
    }catch (e){
        dispatch(failed(e))
    }
}
