import axios from 'axios'
export const getpools = (data) => {
    // return axios.all([
    //     axios.get('https://lotteryhub.com/poc/lottery_numbers.json')
    // ])
    return axios.request({
        method: 'GET',
        url: 'https://dreamlottery-demoo.herokuapp.com/powerball',
        headers: {
            'Access-Control-Expose-Headers': 'Access-Control-Allow-Origin',
            // 'Access-Control-Allow-Origin': '*',
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(response => (
            response
        ))
}

export const getMega = (data) => {
   
    return axios.request({
        method: 'GET',
        url: 'https://dreamlottery-demoo.herokuapp.com/megamillion',
        headers: {
            'Access-Control-Expose-Headers': 'Access-Control-Allow-Origin',
            // 'Access-Control-Allow-Origin': '*',
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(response => (
            response
        ))
}