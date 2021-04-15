import {useDispatch} from "react-redux";
import {addToDo} from '../../redusers/actions'

const AddNewItem = ()=>{
    const dispatch = useDispatch();
    return <input onKeyDown={(e)=>(e.keyCode === 13)&&dispatch(addToDo(e.target.value))} style={{width: '100%', textAlign:'center'}}/>
}

export default AddNewItem