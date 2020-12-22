import axios from 'axios'
export const getProfiles = (data) => {
    return axios.request({
        method: 'GET',
        url: 'https://dreamlottery-demoo.herokuapp.com/profiles',
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
        url: 'https://dreamlottery-demoo.herokuapp.com/profiles/delete',
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