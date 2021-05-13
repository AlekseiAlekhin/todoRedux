import {combineReducers} from "redux";
import changingToDoList from "./changingToDoList";
import filter from "./filter"

const reducer = combineReducers({
    changingToDoList,
    filter,
})

export default reducer;