import axios from 'axios'
// import getdataReducer from 'Store/Reducers/getData'
import { getpools, getMega } from "Services/Pool";

export const getPoolsData = () => async (dispatch) => {
    // const poolsResult = await getpools();
    // if(poolsResult){
    //     dispatch({ type: "GET_MEGA_DATA", data: poolsResult})
    // }
    await axios.request({
        method: 'GET',
        url: 'https://dreamlottery-demoo.herokuapp.com/pools/powerball',
        headers: {
            'Access-Control-Expose-Headers': 'Access-Control-Allow-Origin',
            // 'Access-Control-Allow-Origin': '*',
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(response => (
            dispatch({ type: "GET_POOLS_DATA", data: response })
        ))

}


export const getPowerData = () => async (dispatch) => {
    // const poolsResult = await getpools();
    // if(poolsResult){
    //     dispatch({ type: "GET_MEGA_DATA", data: poolsResult})
    // }
    await axios.request({
        method: 'GET',
        url: 'http://localhost:8000/pools/power',
        headers: {
            'Access-Control-Expose-Headers': 'Access-Control-Allow-Origin',
            // 'Access-Control-Allow-Origin': '*',
            "Accept": "application/json",
        }
    })
        .then(response => (
            dispatch({ type: "GET_POWER_DATA", data: response })
        ))

}

export const getMegaData = () => async (dispatch) => {
    await axios.request({
        method: 'GET',
        url: 'https://dreamlottery-demoo.herokuapp.com/pools/megamillion',
        headers: {
            'Access-Control-Expose-Headers': 'Access-Control-Allow-Origin',
            // 'Access-Control-Allow-Origin': '*',
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(response => (
            dispatch({ type: "GET_MEGA_DATA", data: response })
        ))
}




export const setSelectedState = (data) => async (dispatch) => {
    return dispatch({ type: "SET_SELECTED_STATE", data: data })
}







