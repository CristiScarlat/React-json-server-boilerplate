import React from 'react';
import { Carousel } from 'react-bootstrap';


const Carusel = (props) => {
    return (
        <Carousel interval={null}>
            {props.imgs.map(image => (<Carousel.Item>
                <img src={image.path} alt="..." width="100%" height="auto"/>
            </Carousel.Item>))}
        </Carousel>
    )
}

export default Carusel;