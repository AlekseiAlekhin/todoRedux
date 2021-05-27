
const ToDoItem = ({item})=>{
    return <li className = {'taskItem'}>{item.text}</li>
}
// todo обернуть в memo
export default ToDoItem
