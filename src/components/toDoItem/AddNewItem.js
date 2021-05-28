import {useDispatch} from "react-redux";
import {addTodoSome} from "../../actions /actionsCreator";
import {useSelector} from "react-redux";
import {memo} from "react";


const AddNewItem = () => {
    const userName = useSelector(state => state.authorization.userName)
    const dispatch = useDispatch();
    return <input className={'addSomeNewToDo'} onKeyDown={(e) => (e.keyCode === 13) && dispatch(addTodoSome({text:e.target.value, userName: userName}))}
                  style={{width: '100%', textAlign: 'center'}}/>
}

export default memo(AddNewItem)
