import {Button} from 'bootstrap-4-react'
import React, {memo, useRef} from "react"
import {Link, useHistory} from "react-router-dom";
import {createUserRegistration} from "../Services/todoService";
import {Collapse, Navbar} from "bootstrap-4-react/lib/components";
import {BDiv} from "bootstrap-4-react/lib/components/dom";


export const Registration = memo(() => {
    const name = useRef()
    const pass = useRef()
    const history = useHistory()
    const registrUser = async () =>{
        await createUserRegistration({userName: name.current.value, password: pass.current.value})
        history.push('/login')
    }

    return <div>
        <Navbar expand="lg" dark style={{ backgroundColor: '#000' }} mb="3">
            <Navbar.Brand href="#">Your ToDo List</Navbar.Brand>
            <Navbar.Toggler target="#navbarColor1" />
            <Collapse navbar id="navbarColor3">
                <Navbar.Nav mr="auto">
                </Navbar.Nav>
                <Link to={'/login'}><Button type={'button'} dark>logIn</Button></Link>
                <Button type={'button'} dark disabled>Registration</Button>
            </Collapse>
        </Navbar>
        <BDiv mx="auto" shadow="lg" mb="5" bg="light" rounded style={{maxWidth: '400px',padding: '15px 20px', boxSizing: 'border-box'}}>
            <h2>REGISTRATION</h2>
            <BDiv style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}><p>Login</p><input ref={name} name={'name'} style={{marginBottom:'5px'}}/></BDiv>
            <BDiv style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}><p>Password</p><input ref={pass} name={'password'} style={{marginBottom:'5px'}}/></BDiv>
            <Button dark onClick={registrUser}>Done</Button>
        </BDiv>
    </div>
})
