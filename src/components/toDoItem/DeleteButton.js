import {useDispatch} from "react-redux";
import {dltButton} from "../redusers/actions";
import {FaTrashAlt} from 'react-icons/fa'

const DeleteButton = (id)=>{
    const dispatch = useDispatch();
    return <button style={{outline:'none',border: 'none'}} type={"button"} onClick={()=>dispatch(dltButton(id))}><FaTrashAlt/></button>
}

export default DeleteButton