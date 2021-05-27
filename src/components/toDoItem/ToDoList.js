import ToDoItem from "./ToDoItem";
import CheckboxToDo from "./CheckboxToDo";
import DeleteButton from "./DeleteButton";
import {useSelector} from "react-redux";
import {filters} from "../../redusers/filter";
import {useMemo} from "react";


const ToDoList = ({content}) =>{
    const currentFilter = useSelector((state) => state.filter);
    const filteredTasks = useMemo(() => {
        switch (currentFilter) {

            case(filters.SHOW_COMPLETED):
                return content.filter((item)=>(item.isChecked))
            case(filters.SHOW_TODO):
                return content.filter((item)=>(!item.isChecked))
            default:
                return content;
        }
    }, [content, currentFilter]);

    return (
         <ul style={{listStyleType:'none'}}>
             {filteredTasks.map(function(todo){
                return(
                    <div className={`${todo.isChecked? '.innerForToDo checked':'innerForToDo'}`} style={{display: 'flex'}} key={todo._id}>
                        <div className={'inner'}>
                        <CheckboxToDo id={todo._id} isChecked={todo.isChecked}/>
                        <ToDoItem item={todo}/>
                        </div>
                        <div className={'inner'}>
                        <DeleteButton id={todo._id}/>
                        </div>
                    </div>
            )
            })}
         </ul>
    )
}
// todo обернуть в memo
export default ToDoList
