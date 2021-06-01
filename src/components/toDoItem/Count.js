import {useDispatch} from "react-redux";
import {updateAllDb} from "../../actions /actionsCreator";



const Count = (props)=>{
    const dispatch = useDispatch();
    return <a onClick={()=>dispatch(updateAllDb(true))} style={{fontSize:'smaller', margin:'0'}}>{props.length} tasks left</a>
}

export default Count
