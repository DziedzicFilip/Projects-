import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import backgroundImage1 from '../assets/train.jpg';
import backgroundImage2 from '../assets/star-wars.jpg';
import backgroundImage3 from '../assets/train.jpg';
import backgroundImage4 from '../assets/film.jpg';
import Button from 'react-bootstrap/Button';



export const MainKaruzela = (props) => {
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const [prevBackgroundIndex, setPrevBackgroundIndex] = useState(0);
    const backgrounds = [backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4];

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevBackgroundIndex(backgroundIndex);
            setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [backgrounds.length]);

    return (
        <Container fluid className="box-container" style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}>
            {props.children}
        </Container>
    );
};