import './App.css';
import {useDispatch, useSelector} from "react-redux";
import { BDiv } from "bootstrap-4-react/lib/components/dom";

import AddNewItem from "./components/toDoItem/AddNewItem";
import ToDoList from "./components/toDoItem/ToDoList";
import Count from './Count'
import Filters from "./components/Filter/Filters";
import ClearCheckedToDo from "./components/toDoItem/ClearCheckedToDo";
import {useEffect} from "react";
import {getTodo} from "./actions /actionsCreator";
import {FormAuthorization} from "./components/pageAuthorization/FormAuthorization";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Registration} from "./components/pageRegistration/Registration";


function App() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getTodo())
    }, [])

    console.log(FormAuthorization());

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <FormAuthorization/>
                </Route>
                <Route path={'/registration'}>
                    <Registration/>
                </Route>
                <Route path={'/todolist'}>
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
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
