import {UserName} from "./UserName";
import {UserPassword} from "./UserPasword";
import {ButtonSubmit} from "./ButtonSubmit";
import {Link} from "react-router-dom";

export const FormAuthorization = ()=>{
    return <div>
        <UserName/>
        <UserPassword/>
        <Link to={'/todolist'}><ButtonSubmit/></Link>
        <Link to={'/registration'}>Registration</Link>
    </div>
}