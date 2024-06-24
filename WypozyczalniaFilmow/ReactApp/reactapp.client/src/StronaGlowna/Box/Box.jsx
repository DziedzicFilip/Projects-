import{ useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import backgroundImage1 from '../../assets/train.jpg';
import backgroundImage2 from '../../assets/star-wars.jpg';
import backgroundImage3 from '../../assets/train.jpg';
import backgroundImage4 from '../../assets/film.jpg';
import Button from 'react-bootstrap/Button';

import './Box.css';

export const Box = () => {
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const [, setPrevBackgroundIndex] = useState(0);
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
            <Row className="box-content align-items-center">
                <Col xs={12} className="text-center">
                    <h1>FilmMates</h1>
                    <h2>Filmy u nas nigdy nie sa same</h2>   
                    <Form > 
                        <Row >
                              <Col sm={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="display-6">Nazwa filmu</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={6}>
                                            <Form.Group className="mb-3">
                                    <Form.Label className="display-6">Kategorie</Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option>Wybierz</option>
                                                    <option value="1">Kryminal</option>
                                                    <option value="2">Fantasy</option>
                                        <option value="3">Sience Fiction </option>
                                        <option value="3">Dokumnetlany </option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                    </Form>
                    <Row>
                       
                            <Button variant="secondary" size="lg" href="/oferta">
                           Szukaj
                        </Button>
                        
                    </Row>
                        
                </Col>
            </Row>
        </Container>
    );
};