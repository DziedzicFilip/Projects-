import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Image2 from '../../assets/IncepcjaScena1.jpg';
import Image3 from '../../assets/IncepcjaScena2.jpg';
import Image1 from '../../assets/IncepcjaScena3.jpg';

export const Karuzela = () => {
    return (
        <Container fluid style={{ backgroundColor: '#1a1a1a', color: '#ffffff', margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Carousel style={{ width: '100%', height: '600px' }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Image2}
                        alt="First slide"
                        style={{ height: '600px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <p>Scena 1</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Image3}
                        alt="Second slide"
                        style={{ height: '600px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <p>Scena 2</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Image1}
                        alt="Third slide"
                        style={{ height: '600px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <p>Scena 1</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </Container>
    );
};
