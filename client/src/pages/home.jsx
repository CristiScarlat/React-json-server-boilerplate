import React, { useEffect } from 'react';
import Carusel from '../components/caruselComponent/caruselComponent';
import { getProducts } from '../services/api';
import { useProducts } from '../customHooks/useServices';

const Home = () => {

    const { loading, data } = useProducts();
    useEffect(() => {
        getProducts('products-cosmetics')
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }, [])


    console.log(loading, data)

    return (
    <div>
        <Carusel />
        {/* {!loading ? JSON.stringify(data) : '...loading'} */}
    </div>
    )
}

export default Home;