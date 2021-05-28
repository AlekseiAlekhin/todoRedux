import {Button} from 'bootstrap-4-react'
import {memo, useRef} from "react"
import {useHistory} from "react-router-dom";
import {createUserRegistration} from "../Services/todoService";


export const Registration = memo(() => {
    const name = useRef()
    const pass = useRef()
    const history = useHistory()
    const registrUser = async () =>{
        await createUserRegistration({userName: name.current.value, password: pass.current.value})
        history.push('/login')
    }

    return <div>
        <h1>REGISTRATION</h1>
        <input ref={name} name={'name'}/>
        <input ref={pass} name={'password'} />
        <Button dark onClick={registrUser}>Done</Button>
    </div>
})
