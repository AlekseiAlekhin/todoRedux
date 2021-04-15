import {useDispatch} from "react-redux";
import { Button } from 'bootstrap-4-react';

const ToDoFilter = ()=>{
    const dispatch = useDispatch();
    return <Button type={'button'} onClick={()=>dispatch({type:'SHOW_TODO'})} light>Show ToDo</Button>
}

export default ToDoFilter;