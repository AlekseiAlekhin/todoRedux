import './App.css';
import PrivateRoute from "./components/PrivateRoute";
import {FormAuthorization} from "./components/pageAuthorization/FormAuthorization";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Registration} from "./components/pageRegistration/Registration";
import ToDo from "./components/toDoItem/ToDo";
import {useSelector} from "react-redux";


function App() {
    const isAuth = useSelector(state => state.authorization.isAuth)
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path={'/'} shouldRedirect={isAuth} render={()=><ToDo/>} redirectTo={'/login'}/>
                <PrivateRoute path={'/registration'} shouldRedirect={!isAuth} render={()=><Registration/>} redirectTo={'/'}/>
                <PrivateRoute path={'/login'} shouldRedirect={!isAuth} render={()=><FormAuthorization/>} redirectTo={'/'}/>
            </Switch>
        </Router>
    );
}

export default App;
