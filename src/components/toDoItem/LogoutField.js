import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const LogoutField = ({userName}) =>{
    const dispatch = useDispatch()
    return <div>
        <Link to={'/'}><button onClick={()=>dispatch({type: 'LOGOUT'})}>logout</button></Link>
        <p>{userName}</p>
    </div>
}

export default LogoutField