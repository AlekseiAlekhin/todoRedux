import LogoutField from "./LogoutField";
import {BDiv} from "bootstrap-4-react/lib/components/dom";
import AddNewItem from "./AddNewItem";
import ToDoList from "./ToDoList";
import Count from "../../Count";
import Filters from "../Filter/Filters";
import ClearCheckedToDo from "./ClearCheckedToDo";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getTodo} from "../../actions /actionsCreator";

const ToDo = ()=>{
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getTodo({userName: state.authorization.userName}))
    }, [])
   return <div>
    <LogoutField userName={state.authorization.userName}/>
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
   </div>
}

export default ToDo