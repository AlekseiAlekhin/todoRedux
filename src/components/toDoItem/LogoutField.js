import {Link} from "react-router-dom";

const LogoutField = ({userName}) =>{
    return <div>
        <Link to={'/'}><button>logout</button></Link>
        <p>{userName}</p>
    </div>
}

export default LogoutField