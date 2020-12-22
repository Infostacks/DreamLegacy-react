import axios from 'axios'
export const getpools = (data) => {
    return axios.request({
        method: 'POST',
        url: 'https://dreamlottery-demoo.herokuapp.com/pools',
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