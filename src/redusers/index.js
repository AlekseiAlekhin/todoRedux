import {combineReducers} from "redux";
import changingToDoList from "./changingToDoList";
import filter from "./filter"

const reduser = combineReducers({
    changingToDoList,
    filter,
})

export default reduser;