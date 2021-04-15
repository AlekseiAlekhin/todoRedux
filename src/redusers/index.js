import {combineReducers} from "redux";
import changingToDoList from "./changingToDoList";
import filter from "./filter"

export default combineReducers({
    changingToDoList,
    filter,
})