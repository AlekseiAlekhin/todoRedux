import {useDispatch} from "react-redux";
import {FaTrashAlt} from 'react-icons/fa'
import {deleteFromDb} from "../../actions /actionsCreator";

const DeleteButton = ({id}) => {
    const dispatch = useDispatch();
    return <button className={'dltButton'}
                   type={"button"}
                   onClick={() => dispatch(deleteFromDb(id))}>
     <FaTrashAlt/>
    </button>
}

export default DeleteButton