import axios from 'axios'
export const getProfiles = (data) => {
    return axios.request({
        method: 'GET',
        url: 'http://localhost:8000/profiles',
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
        url: 'http://localhost:8000/profiles/delete',
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