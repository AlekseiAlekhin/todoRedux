import {combineReducers} from "redux";
import changingToDoList from "./changingToDoList";
import filter from "./filter"
import authorization from "./authorization";

const reducer = combineReducers({
    changingToDoList,
    filter,
    authorization,
})

export default reducer;