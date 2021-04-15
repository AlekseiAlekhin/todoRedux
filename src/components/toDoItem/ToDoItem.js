
const ToDoItem = ({item})=>{
    console.log('some shit' ,item)
    return <li className = {`${item.isChecked? 'taskItem checked':'taskItem'}`}>{item.text}</li>
}

export default ToDoItem