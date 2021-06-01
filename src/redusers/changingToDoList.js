import {ADD_TODO_TO_DB, FAILED, GET_ALL_FROM_DB, UPDATE_ALL_DB, DELETE_TODO_FROM_DB, UPDATE_TODO_IN_DB, DELETE_CHECKED_FROM_DB} from "../actions /actions";

function changingToDoList(state = [], action) {

    switch (action.type) {
        case (GET_ALL_FROM_DB):
            return state.concat(action.payload);
        case (ADD_TODO_TO_DB):
            return [...state, {_id: action.payload._id, text: action.payload.text, isChecked: action.payload.isChecked, userName: action.payload.userName}];
        case(UPDATE_TODO_IN_DB):
            return state.map((item)=> (item._id === action.payload._id)? {...item, isChecked:action.payload.isChecked}: item)
        case(DELETE_TODO_FROM_DB):
           return state.filter((item) => item._id !== action.payload)
        case(UPDATE_ALL_DB):
            return state.map((item)=> ({...item, isChecked: true}))
        case(DELETE_CHECKED_FROM_DB):
            return state.filter((item)=>{
                return !item.isChecked;
            })
        // case(FAILED):
        //     console.log('Changing')
        //     return state;
        default:
            return state;
    }
}

export default changingToDoList;
