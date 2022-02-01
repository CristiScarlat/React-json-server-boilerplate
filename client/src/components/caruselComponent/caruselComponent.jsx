import React from 'react';
import { Carousel } from 'react-bootstrap';


const Carusel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <div style={{width: '100%', height: '480px', background: '#3399FF' }}></div>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div style={{width: '100%', height: '480px', background: 'blue' }}></div>

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div style={{width: '100%', height: '480px', background: 'orange' }}></div>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Carusel;