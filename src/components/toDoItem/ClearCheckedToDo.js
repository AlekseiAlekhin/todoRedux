import {useDispatch} from "react-redux";

const ClearCheckedToDo = ()=>{
    const dispatch = useDispatch();
    return <a onClick={()=>dispatch({type:'DELETE_ALL_CHECKED'})} style={{fontSize:'smaller', margin:'0'}}>clear checked</a>
}

export default ClearCheckedToDo;