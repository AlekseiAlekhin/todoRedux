import {memo} from "react";

const ToDoItem = ({item})=>{
    return <li className = {'taskItem'}>{item.text}</li>
}

export default memo(ToDoItem)
