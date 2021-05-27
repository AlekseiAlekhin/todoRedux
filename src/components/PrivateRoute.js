import {Redirect, Route} from "react-router-dom";
import React from "react";

const PrivateRoute = ({shouldRedirect,path, render, redirectTo}) => {
    return  <Route path={path} render={shouldRedirect ? render : () => <Redirect to={redirectTo}/>} />
}
// todo обернуть в memo
export default PrivateRoute
