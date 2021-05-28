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

export const authorizationUserAction = (tokenAndUserName) =>{
    return {type: LOGIN_USER, payload: tokenAndUserName}
}
export const authorizationUser = (userNameAndPassword) => async (dispatch) =>{
    try{
       const tokenAndUserName = await userAutorisation(userNameAndPassword);
       dispatch(authorizationUserAction(tokenAndUserName));
       localStorage.setItem('userData', JSON.stringify(tokenAndUserName));
    }catch (e){
        dispatch(failed(e))
    }
}

export const isValidTokenAction = (userData) =>{
    return {type: VALID_USER, payload: userData}
}
export const checkToken = (token) => async (dispatch)=>{
    try{
        const userData = await CheckTokenAPI(token);
        dispatch(isValidTokenAction(userData))
    }catch (e){
        dispatch(failed(e))
    }
}
