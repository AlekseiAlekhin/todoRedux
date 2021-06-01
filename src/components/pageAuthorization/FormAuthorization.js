import {Link} from "react-router-dom";
import {Button} from 'bootstrap-4-react'
import React, {memo} from 'react';
import {useDispatch} from "react-redux";
import {authorizationUser} from "../../actions /actionsCreator";
import {useRef} from "react";
import {Collapse, Form, Navbar, Nav} from "bootstrap-4-react/lib/components";
import {BDiv} from "bootstrap-4-react/lib/components/dom";

export const FormAuthorization = memo(() => {
    const dispatch = useDispatch();
    const name = useRef();
    const pass = useRef();
    return <div style={{padding: '0', boxSizing: 'border-box'}}>
        <Navbar expand="lg" dark style={{backgroundColor: '#000'}} mb="3">
            <Navbar.Brand href="#">Your ToDo List</Navbar.Brand>
            <Navbar.Toggler target="#navbarColor1"/>
            <Collapse navbar id="navbarColor3">
                <Navbar.Nav mr="auto">
                </Navbar.Nav>
                <Button type={'button'} dark disabled>logIn</Button>
                <Link to={'/registration'}><Button type={'button'} dark>Registration</Button></Link>
            </Collapse>
        </Navbar>
        <BDiv mx="auto" shadow="lg" mb="5" bg="light" rounded
              style={{maxWidth: '400px', padding: '15px 20px', boxSizing: 'border-box'}}>
            <h2>LogIn</h2>
            <BDiv style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}><p>Login</p><input
                ref={name} type={"input"} name={'name'} required style={{marginBottom: '5px'}}/></BDiv>
            <BDiv style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}><p>Password</p><input
                ref={pass} type="password" name={'password'} required style={{marginBottom: '5px'}}/></BDiv>
            <Button type={'submit'} dark onClick={() => dispatch(authorizationUser({
                userName: name.current.value,
                password: pass.current.value
            }))}>Next</Button>
        </BDiv>

    </div>
})
