import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {LOGOUT} from "../../actions /actions";
import {memo} from "react";

const LogoutField = ({userName}) =>{
    const dispatch = useDispatch()
    return <div>
        <Link to={'/'}><button onClick={()=>{
            localStorage.removeItem('userData');
            dispatch({type: LOGOUT})
        }}>logout</button></Link>
        <p>{userName}</p>
    </div>
}

export default memo(LogoutField)
