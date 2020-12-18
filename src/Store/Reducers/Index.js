
import isLoggedReducer from './Islogged';
import {combineReducers} from 'redux';
import getdataReducer from './getData';

const allReducers = combineReducers({

    data: getdataReducer,
    isLogged: isLoggedReducer
});

export default allReducers;  