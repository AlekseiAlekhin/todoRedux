import {useDispatch} from "react-redux";
import {FaTrashAlt} from 'react-icons/fa'
import {deleteFromDb} from "../../actions /actionsCreator";
import {memo} from "react";

const DeleteButton = ({id}) => {
    const dispatch = useDispatch();
    return <button className={'dlt-Button'}
                   type={"button"}
                   onClick={() => dispatch(deleteFromDb(id))}>
     <FaTrashAlt/>
    </button>
}

export default memo(DeleteButton)
