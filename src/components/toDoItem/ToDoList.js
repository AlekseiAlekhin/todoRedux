import ToDoItem from "./ToDoItem";
import CheckboxToDo from "./CheckboxToDo";
import DeleteButton from "./DeleteButton";
import {useSelector} from "react-redux";
import {filters} from "../redusers/filter";

const ToDoList = ({content}) =>{
    const currentFilter = useSelector((state) => state.filter);
    const getFilteredTasks = () => {
        switch (currentFilter) {
            case(filters.SHOW_ALL):
                return content;
            case(filters.SHOW_COMPLETED):
                return content.filter((item)=>(item.isChecked))
            case(filters.SHOW_TODO):
                return content.filter((item)=>(!item.isChecked))
        }
    };

    return (
         <ul style={{listStyleType:'none'}}>
             {getFilteredTasks().map(function(todo){
                return(
                    <div className={'innerForToDo'} style={{display: 'flex'}} key={todo.key}>
                        <CheckboxToDo id={todo.key} isChecked={todo.isChecked}/>
                        <ToDoItem item={todo}/>
                        <DeleteButton id={todo.key}/>
                    </div>
            )
            })}
         </ul>
    )
}

export default ToDoList