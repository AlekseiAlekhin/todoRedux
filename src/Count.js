import {useDispatch} from "react-redux";
import {updateAllDb} from "./actions /actionsCreator";
// todo вынести в отдельный компонент
const Count = (props)=>{
    const dispatch = useDispatch();
    return <a onClick={()=>dispatch(updateAllDb(true))} style={{fontSize:'smaller', margin:'0'}}>{props.length} tasks left</a>
}

export default Count
