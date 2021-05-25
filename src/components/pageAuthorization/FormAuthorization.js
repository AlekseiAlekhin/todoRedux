import {Link} from "react-router-dom";
import { Button } from 'bootstrap-4-react'
import {useDispatch} from "react-redux";
import {authorizationUser} from "../../actions /actionsCreator";
import {useRef} from "react";

export const FormAuthorization = ()=>{
    let dispatch = useDispatch();
    let name = useRef();
    let pass = useRef();
    return <div>
        <input ref={name} type={"input"} name={'name'} required/>
        <input ref={pass} type="input" name={'password'} required/>
        <Button type={'submit'} dark onClick={()=>dispatch(authorizationUser({userName:name.current.value, password:pass.current.value}))}>Next</Button>
        <Link to={'/registration'}>Registration</Link>
    </div>
}