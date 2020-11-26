import axios from 'axios'
export const getpools = (data) => {
    return axios.request({
        method: 'GET',
        url: 'https://www.powerball.com/api/v1/numbers/powerball/recent?_format=json',
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