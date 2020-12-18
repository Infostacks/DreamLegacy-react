import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect,Link, BrowserRouter  } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.9.0";
import Dash from "views/Dashboard/index";
import Users from "./views/Users/User";
// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import SignUpPage from "views/Signup";
import StatesPage from "views/StatesPage/Index";
import DataTable from "views/Groups/index"
import Powerball from "views/Powerball/Powerball.js";
import Mega from "views/Megamillions/Megamillions.js"; 
import States from "views/States/States.js";
import {applyMiddleware, createStore} from 'redux';
import allReducers from './Store/Reducers/Index'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
 
import rootReducer from './Store/Reducers/Index'
  
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer( persistConfig,rootReducer);
  const myStore = createStore(persistedReducer,applyMiddleware(thunk));
    const persistor = persistStore(myStore)
// export {myStore,persistor};

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


// const PrivateRoute = ({ component: component, ...rest }) => (

//   <Route {...rest} render={() => (
//     localStorage.getItem('Token') != null ?
//       <Route path="/admin" render={props => <Dash {...props} />} />
//       :
//       <Redirect to='/login' />
//   )
//   } />
// )

const PrivateRoute = ({ component: component, ...rest }) => (
  <Route {...rest} render={()   =>( 
  localStorage.getItem('Token') != null ?
    <Route exact path='/landing-page' render={props => <LandingPage{...props} /> } /> :

    <Redirect exact to='/login' />
)
  } />
)
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={myStore}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter forceRefresh={true}>
  <Router history={history}>
    <Switch>
<<<<<<< HEAD
      <Route path="/login" component={LoginPage} />
      <PrivateRoute path="/landing-page" component={LandingPage} />
      <PrivateRoute path="/profile-page" component={ProfilePage} />
      <Route path="/signup" component={SignUpPage} />
      <PrivateRoute path="/admin" component={Dash} />
      <PrivateRoute path="/Users" component={Users} />
      <PrivateRoute path="/Group" component={DataTable} />
      <Route path="/" component={Components} />
=======
      <Route exact path='/login' component={LoginPage} />
      <PrivateRoute exact path='/landing-page' component={LandingPage} />
      <PrivateRoute exact path='/profile-page' component={ProfilePage} />
      <Route exact path='/signup' component={SignUpPage} />
      <PrivateRoute exact path='/admin' component={Dash} />
      <PrivateRoute exact path='/Group' component={DataTable} />
      <Route exact path='/powerball' component={Powerball} />
      <Route exact path='/megamillions' component={Mega} />
      <Route exact path='/states' component={States}/>
      <Route exact path='/states-page' component={StatesPage}/>
>>>>>>> 082535a13607c3653abf1fc196de2a1273ebd890
    </Switch>
  </Router>
  </BrowserRouter>
  </PersistGate>
  </Provider>,
  document.getElementById("root")
);







