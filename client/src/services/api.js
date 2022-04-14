import axios from 'axios'

const instance = axios.create ({
    baseURL : 'http://localhost:5000/',
    headers: {'Accept': 'application/json'}
  })

async function getProducts(productType){
    try{
        const res = await instance.get(productType);
        return res.data
    } 
    catch(error){
        throw new Error(error)
    }
}


export { getProducts }