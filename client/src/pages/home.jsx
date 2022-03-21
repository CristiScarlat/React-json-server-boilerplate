import React, { useEffect } from 'react';
import Carusel from '../components/caruselComponent/caruselComponent';
import { getProducts } from '../services/api';

const Home = () => {

    useEffect(() => {
        getProducts()
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }, [])

    return (
    <div>
        <Carusel />
    </div>
    )
}

export default Home;