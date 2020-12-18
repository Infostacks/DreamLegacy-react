import axios from 'axios'
export const getpools = (data) => {
    return axios.request({
        method: 'POST',
        url: 'http://localhost:8000/pools',
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