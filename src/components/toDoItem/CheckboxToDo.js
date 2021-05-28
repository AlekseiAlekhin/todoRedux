import {useDispatch} from "react-redux";
import {updateDB} from "../../actions /actionsCreator";
import {memo} from "react";

const CheckboxToDo = ({id, isChecked})=>{
    const dispatch = useDispatch();
    return <input className={'checkbox'} checked={isChecked} type={'checkbox'} onChange={()=>dispatch(updateDB(id, isChecked))}/>
}

export default memo(CheckboxToDo)
