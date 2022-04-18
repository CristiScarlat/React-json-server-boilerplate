import React, { useEffect, useState } from 'react';
import Carusel from '../components/caruselComponent/caruselComponent';
import { searchShows } from '../services/api';

const Home = () => {

    const [querySearch, setQuerySearch] = useState('');
    const [searchRes, setSearchRes] = useState([]);

    const handleQueryOnChange = (e) => {
        setQuerySearch(e.target.value);
        console.log(e.target.value);
    }

    const handleSearch = async () => {
        const res = await searchShows(querySearch)
        setSearchRes(res.data)
    }

    console.log(searchRes.map(item => item.show.image))

    return (
        <>
        <div className="m-3">
            <input type="text" onChange={handleQueryOnChange} />
            <button onClick={handleSearch}>Search</button>
        </div>
        {searchRes.length > 0 && searchRes.map(item => item.show.image ? <img src={item.show.image.original} alt="..."  width={320} height="auto"/> : <div>no image</div>)}
        </>
    )
}

export default Home;