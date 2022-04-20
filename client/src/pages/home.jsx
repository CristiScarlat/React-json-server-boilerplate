import React, { useEffect, useState } from 'react';
import Carusel from '../components/caruselComponent/caruselComponent';
import { getProducts, getCarouselImages } from '../services/api';
import './pages.css';

const Home = () => {

    const [ carouselImgs, setCarouselImgs ] = useState([]);

    useEffect(() => {
        getProducts('products-cosmetics')
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))

        getCarouselImages()
            .then(res => {
                setCarouselImgs(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    console.log("carousel-img", carouselImgs)

    return (
        <div className="m-3">
            <div className="carousel-container">{carouselImgs.length > 0 && <Carusel imgs={carouselImgs}/>}</div>
            <div>
                
            </div>
        </div>
    )
}

export default Home;