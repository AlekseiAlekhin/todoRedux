import {useDispatch} from "react-redux";
import {checkedCheckbox} from "../redusers/actions";

const CheckboxToDo = (props)=>{
    console.log(props);
    const dispatch = useDispatch();
    return <input className={'checkbox'} checked={props.isChecked} type={'checkbox'} onChange={()=>dispatch(checkedCheckbox(props.id))}/>
}

export default CheckboxToDo