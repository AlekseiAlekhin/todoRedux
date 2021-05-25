import {LOGIN_USER} from "../actions /actions";


function authorization(state={isAuth:false}, action){
    switch (action.type) {
        case(LOGIN_USER):
            return state = {
                isAuth: true,
                ...action.payload
            };
        default:
            return state;
    }
}

export default authorization;