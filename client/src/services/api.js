import axios from 'axios'

const instance = axios.create ({
    baseURL : 'http://localhost:5000',
    headers: {'Accept': 'application/json'}
  })

//   function buildParams(obj) {
//     const arr = []
//     Object.keys(obj).forEach(k => {
//         if(obj[k])arr.push(`${k}=${obj[k]}`)
//     })   
//     return arr.join('&')
// }

// //https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false
// async function getCoinsMarket(paramsObj){
//     const params = buildParams(paramsObj)
//     return await instance.get(`/coins/markets?${params}`)
// }

// //https://api.coingecko.com/api/v3/coins/bitcoin
// async function getCoinDetails(id){
//     return await instance.get(`/coins/${id}`)
// }

async function getCities() {
    return await instance.get('/cities');
}

export { getCities }