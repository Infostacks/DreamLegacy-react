import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import allReducers from './Reducers';
import { Provider } from 'react-redux';
import initialState from '../Store/initialState/index'


const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>


    </Provider>

    , document.getElementById('root'));