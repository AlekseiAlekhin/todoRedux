import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {LOGOUT} from "../../actions /actions";
import {memo} from "react";
import {Button} from "bootstrap-4-react/lib/components";

const LogoutField = ({userName}) =>{
    const dispatch = useDispatch()
    return <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
        <p style={{color: 'white', margin: '0'}}>UserName {userName}</p>
        <Link to={'/'}><Button onClick={()=>{
            localStorage.removeItem('userData');
            dispatch({type: LOGOUT})
        }} dark>logout</Button></Link>
    </div>
}

export default memo(LogoutField)
