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