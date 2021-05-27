import {LOGIN_USER, LOGOUT, VALID_USER} from "../actions /actions";

// todo убрать консоль логи
function authorization(state={isAuth:false}, action){
    switch (action.type) {
        case(LOGIN_USER):
            return state = {
                isAuth: true,
                ...action.payload
            };
        case(LOGOUT):
            console.log('зашел')
            return state = {
                isAuth: false,
            }
        case (VALID_USER):
            console.log(action.payload.length)
            if(action.payload.length === 0){
                return state = {
                    isAuth: false,
                }
            }
            return state = {
                isAuth: true,
                ...action.payload
            }
        default:
            return state;
    }
}

export default authorization;
