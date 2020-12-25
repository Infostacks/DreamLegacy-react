import {initialState } from './inital';

const getStateData=(state=initialState.data,action) => {
    switch (action.type){
        case "GET_STATES":
            return {
                ...state,
                stateData: action.data
            }
            default:
                return state
    }
}


const getdataReducer = (state = initialState.data, action) => {
    switch (action.type) {
        case "GET_POOLS_DATA":
            return {
                ...state,
                poolsData: action.data
            }
        case "GET_MEGA_DATA":
            return {
                ...state,
                megaData: action.data
            }
            case "GET_POWER_DATA":
                return {
                    ...state,
                    powerData: action.data
                }
        case 'SET_SELECTED_STATE': 
        return {
            ...state,
            selectedStateData: action.data
        }
        default:
            return state
    }
};
export default getdataReducer;