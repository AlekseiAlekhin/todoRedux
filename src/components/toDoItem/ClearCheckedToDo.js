import {useDispatch} from "react-redux";
import {deleteAllCheckedFromDb} from "../../actions /actionsCreator";

const ClearCheckedToDo = ()=>{
    const dispatch = useDispatch();
    return <a onClick={()=>dispatch(deleteAllCheckedFromDb())} style={{fontSize:'smaller', margin:'0'}}>clear checked</a>
}
// todo обернуть в memo
export default ClearCheckedToDo;
