import axios from 'axios'

const instance = axios.create ({
    baseURL : 'https://api.coingecko.com/api/v3',
    headers: {'Accept': 'application/json'}
  })