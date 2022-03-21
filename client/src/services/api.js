import axios from 'axios'

const instance = axios.create ({
    baseURL : 'http://localhost:5000/',
    headers: {'Accept': 'application/json'}
  })

async function getProducts(){
    try{
        const res = await instance.get('/products');
        return res.data
    } 
    catch(error){
        throw new Error(error)
    }
}


export { getProducts }