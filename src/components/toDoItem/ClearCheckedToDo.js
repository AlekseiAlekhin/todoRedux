import {useDispatch} from "react-redux";

const ClearCheckedToDo = ()=>{
    const dispatch = useDispatch();
    return <p onClick={()=>dispatch({type:'DELETE_ALL_CHECKED'})}>clear checked</p>
}

export default ClearCheckedToDo;