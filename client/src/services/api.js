import axios from 'axios'

const instance = axios.create ({
    baseURL : 'https://api.tvmaze.com',
    headers: {'Accept': 'application/json'}
  })

const searchShows = async (querySearch) => {
    try{
        const res = await instance.get(`/search/shows?q=${querySearch}`)
        return res;
    }
    catch(error){
        console.log(error)
    }
}


export { searchShows }