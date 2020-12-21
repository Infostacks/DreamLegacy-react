import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect,Link, BrowserRouter  } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.9.0";
// import Dash from "views/Dashboard/index";
import Users from "./views/Users/User";
// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage";
import ProfilePage from "views/ProfilePage/ProfilePage";
import LoginPage from "views/LoginPage/LoginPage.js";
import SignUpPage from "views/Signup";
import StatesPage from "views/StatesPage/Index";
import DataTable from "views/Groups/index"
import Powerball from "views/Powerball/Powerball";
import Mega from "views/Megamillions/Megamillions.js"; 
import States from "views/States/States.js";
import Dash from "./views/Dashboard/index";
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
      <Route path="/login" component={LoginPage} />

      <Route path="/admin" component={Dash} />
      <Route path="/Users" component={Users} />
      <Route path="/Group" component={DataTable} />
      <Route exact path='/landing-page' component={LandingPage} />
      <Route exact path='/profile-page' component={ProfilePage} />
      <Route exact path='/signup' component={SignUpPage} />
      <Route exact path='/powerball' component={Powerball} />
      <Route exact path='/megamillions' component={Mega} />
      <Route exact path='/states' component={States}/>
      <Route exact path='/states-page' component={StatesPage}/>
    </Switch>
  </Router>
  </BrowserRouter>
  </PersistGate>
  </Provider>,
  document.getElementById("root")
);







