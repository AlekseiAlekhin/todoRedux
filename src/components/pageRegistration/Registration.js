import {Button} from 'bootstrap-4-react'
import {useDispatch} from "react-redux";
import {createNewUser} from "../../actions /actionsCreator";
import {useState, useRef} from "react"
import {Link} from "react-router-dom"

export const Registration = () => {
    // const [value, setValue] = useState({})
    let dispatch = useDispatch();
    const name = useRef()
    const pass = useRef()

    return <div>
        <h1>REGISTRATION</h1>
        <input ref={name} name={'name'}/>
        <input ref={pass} name={'password'} />
        <Button dark onClick={() => dispatch(createNewUser({userName:name.current.value, password:pass.current.value}))}>Done</Button>
    </div>
}