import LogoutField from "./LogoutField";
import {BDiv} from "bootstrap-4-react/lib/components/dom";
import AddNewItem from "./AddNewItem";
import ToDoList from "./ToDoList";
import Count from "./Count";
import Filters from "../Filter/Filters";
import ClearCheckedToDo from "./ClearCheckedToDo";
import {useDispatch, useSelector} from "react-redux";
import React, {memo, useEffect} from "react";
import {getTodo} from "../../actions /actionsCreator";
import {Collapse, Navbar} from "bootstrap-4-react/lib/components";

const ToDo = ()=>{
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getTodo())
    }, [])
   return <>
       <Navbar expand="lg" dark style={{ backgroundColor: '#000'}} mb="3">
           <Navbar.Brand href="#">Your ToDo List</Navbar.Brand>
           <Navbar.Toggler target="#navbarColor1" />
           <Collapse navbar id="navbarColor3">
               <Navbar.Nav mr="auto">
               </Navbar.Nav>
               <LogoutField userName={state.authorization.userName}/>
           </Collapse>
       </Navbar>
            <BDiv mx="auto" style={{ marginTop:'50px',width: '300px' }}><h2>Your todo list</h2></BDiv>
            <BDiv mx="auto" shadow="lg" mb="5" bg="light" rounded style={{maxWidth: '500px'}}>
            <BDiv mx="auto" style={{ width: 'auto' }}><AddNewItem/></BDiv>
            <ToDoList content={state.changingToDoList}/>
            <div style={{display:'flex', alignItems:'center', borderTop:'1px solid lightgrey'}}>
                <Count length={state.changingToDoList.length}/>
                <Filters/>
                <ClearCheckedToDo/>
            </div>
            </BDiv>
   </>
}

export default memo(ToDo)
