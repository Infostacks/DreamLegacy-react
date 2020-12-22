import axios from 'axios'
export const getusers = (data) => {
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

export const editusers = (data) => {
    console.log(data)
    return axios.request({
        method: 'POST',
        url: 'https://dreamlottery-demoo.herokuapp.com/users/edit',
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


export const deleteUser = (data) => {
    console.log(data)
    return axios.request({
        method: 'DELETE',
        url: 'https://dreamlottery-demoo.herokuapp.com/users/delete',
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



export const addusers = (data) => {
    console.log(data)
    return axios.request({
        method: 'POST',
        url: 'https://dreamlottery-demoo.herokuapp.com/users/add',
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