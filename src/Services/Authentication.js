import axios from 'axios'

export const login = (data) => {
    return axios.request({
        method: 'GET',
        url: 'https://dreamlottery-demoo.herokuapp.com/users',
        headers: {
            'Access-Control-Allow-Origin': '*',
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        params: data
    }).then(response => (
        response.data
    ))
}

export const signup = (data) => {
    return axios.request({
        method: 'POST',
        url: 'https://dreamlottery-demoo.herokuapp.com/profiles/add',
        headers: {
            'Access-Control-Allow-Origin': '*',
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        params: data
    }).then(response => (
        response.data
    ))
}