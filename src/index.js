import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.9.0";
import Dash from "views/Dashboard/index";
// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import SignUpPage from "views/Signup";
import DataTable from "views/Groups/index"
var hist = createBrowserHistory();

// const PrivateRoute = ({ component: component, ...rest }) => (

//   <Route {...rest} render={() => (
//     localStorage.getItem('Token') != null ?
//       <Route path="/admin" render={props => <Dash {...props} />} />
//       :
//       <Redirect to='/login' />
//   )
//   } />
// )

const PrivateRoute = ({ component: component, path: path }) => (
  localStorage.getItem('Token') != null ?
    <Route path={path} component={component} /> :

    <Redirect to="/login" />
)

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <PrivateRoute path="/landing-page" component={LandingPage} />
      <PrivateRoute path="/profile-page" component={ProfilePage} />
      <PrivateRoute path="/Signup" component={SignUpPage} />
      <PrivateRoute path="/admin" component={Dash} />
      <PrivateRoute path="/Group" component={DataTable} />
      <PrivateRoute path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);







