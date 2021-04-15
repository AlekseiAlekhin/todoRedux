
const ToDoItem = ({item})=>{
    console.log('some shit' ,item)
    return <li className = {'taskItem'}>{item.text}</li>
}

export default ToDoItem