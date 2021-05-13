import {useDispatch} from "react-redux";
import {addTodoSome} from "../../actions /actionsCreator";



const AddNewItem = () => {
    const dispatch = useDispatch();
    return <input className={'addSomeNewToDo'} onKeyDown={(e) => (e.keyCode === 13) && dispatch(addTodoSome(e.target.value))}
                  style={{width: '100%', textAlign: 'center'}}/>
}

export default AddNewItem