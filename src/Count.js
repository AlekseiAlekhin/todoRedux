import {useDispatch} from "react-redux";

const Count = (props)=>{
    const dispatch = useDispatch();
    console.log('from counter',props);
    return <a onClick={()=>dispatch({type:'ALL_CHECKED'})} style={{fontSize:'smaller', margin:'0'}}>{props.length} tasks left</a>
}

export default Count