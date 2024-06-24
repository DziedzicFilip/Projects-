﻿import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { VideoFrame } from '../VideoFrame/ViedoFrame.jsx';
import rezyser from '../../assets/GLucas.jpg';

export const FilmReview = () => {
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [rating, setRating] = useState(0);

    const handleRating = (value) => {
        setRating(value);
    };

    return (
        <Container fluid style={{ backgroundColor: 'rgb(248, 249, 250)', color: 'black', margin: 0, padding: '20px' }}>
            <Row>
                <Col md={5}>
                    <Card style={{ marginBottom: '25px', padding: 10, backgroundColor: '#1a1a1a', color: 'white' }}>
                        <VideoFrame />
                        <Col className="d-flex justify-content-center">
                            <Link
                                to={{
                                    pathname: '/wypozyczenie'
                                }}
                                state={{ movieTitle: 'WŁADCA PIERŚCIENI: POWRÓT KRÓLA' }}
                            >
                                <Button variant="secondary" style={{ marginTop: '10px', marginRight: '10px' }}>Wypożycz</Button>
                            </Link>

                            <Button variant="secondary" style={{ marginTop: '10px' }} onClick={() => setShowReviewForm(true)}>Dodaj recenzję</Button>
                        </Col>

                        {showReviewForm && (
                            <Form style={{ marginTop: '20px' }}>
                                <Form.Group controlId="review">
                                    <Form.Label>Dodaj recenzję</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Twoja recenzja..." />
                                </Form.Group>
                                <Form.Group controlId="rating" style={{ marginTop: '10px' }}>
                                    <Form.Label>Oceń film</Form.Label>
                                    <div>
                                        {[...Array(5)].map((star, i) => (
                                            <span
                                                key={i}
                                                className="star"
                                                style={{
                                                    fontSize: '2rem',
                                                    color: i < rating ? '#ffd700' : '#ccc',
                                                    cursor: 'pointer'
                                                }}
                                                onClick={() => handleRating(i + 1)}
                                            >
                                                &#9733;
                                            </span>
                                        ))}
                                    </div>
                                </Form.Group>
                                <Button variant="secondary" style={{ marginTop: '10px' }}>Dodaj recenzję</Button>
                            </Form>
                        )}
                    </Card>
                </Col>

                <Col md={7}>
                    <Card style={{ marginBottom: '20px', backgroundColor: '#1a1a1a', color: 'white' }}>
                        <Card.Body>
                            <h3>Opis fabuły</h3>
                            <p>
                                "Powrót Króla" to epickie zakończenie trylogii "Władcy Pierścieni". Frodo i Sam kontynuują swoją niebezpieczną podróż do Góry Przeznaczenia,
                                aby zniszczyć Jedyny Pierścień. Tymczasem Aragorn, Legolas i Gimli prowadzą armię wolnych ludów Śródziemia przeciwko siłom Saurona.
                                Ostateczna bitwa o losy Śródziemia rozgrywa się przed bramami Mordoru, a Frodo musi stawić czoła największej próbie swojej wytrzymałości i woli

                            </p>
                        </Card.Body>
                    </Card>
                    <Card style={{ marginBottom: '20px', backgroundColor: '#1a1a1a', color: 'white' }}>
                        <Card.Body>
                            <h3>Reżyser</h3>
                           
                            <p>
                                Peter Jackson, nowozelandzki reżyser, zdobył międzynarodową sławę dzięki adaptacji trylogii "Władca Pierścieni".
                                Jego styl charakteryzuje się epickim rozmachem, dbałością o detale i umiejętnością łączenia emocjonalnych momentów z widowiskowymi sekwencjami akcji.
                                Jackson jest również znany z innowacyjnego wykorzystania efektów specjalnych..

                            </p>
                        </Card.Body>
                    </Card>
                    <Card style={{ marginBottom: '20px', backgroundColor: '#1a1a1a', color: 'white' }}>
                        <Card.Body>
                            <h3>Historia Powstania</h3>
                            <p>
                                "Powrót Króla" został wydany w 2003 roku jako ostatnia część trylogii. Produkcja trwała łącznie osiem lat, obejmując jednoczesne filmowanie
                                wszystkich trzech części. Film zdobył 11 Oscarów, w tym za najlepszy film i reżyserię, co czyni go jednym z najbardziej nagradzanych filmów w historii kina.
                                Produkcja była wyzwaniem logistycznym,
                                technologicznym i artystycznym, a jej sukces ugruntował pozycję Jacksona jako jednego z czołowych reżyserów naszych czasów.
                                </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div style={{ backgroundColor: '#1a1a1a', color: '#ffffff', margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <h3></h3>
            </div>
            <Row>
                <Col md={12} className="d-flex justify-content-center">
                    <h3>Recenzje użytkowników</h3>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Card style={{ marginBottom: '20px' }}>
                        <Card.Body>
                            <Card.Title>Użytkownik 1</Card.Title>
                            <Card.Text>
                                Świetny film! Polecam każdemu fanowi sci-fi.
                            </Card.Text>
                            <div>
                                {[...Array(4)].map((star, i) => (
                                    <span key={i} className="star" style={{ fontSize: '1.5rem', color: '#ffd700' }}>&#9733;</span>
                                ))}
                                {[...Array(1)].map((star, i) => (
                                    <span key={i} className="star" style={{ fontSize: '1.5rem', color: '#ccc' }}>&#9733;</span>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ marginBottom: '20px' }}>
                        <Card.Body>
                            <Card.Title>Użytkownik 2</Card.Title>
                            <Card.Text>
                                Efekty specjalne są niesamowite, a fabuła trzyma w napięciu.
                            </Card.Text>
                            <div>
                                {[...Array(5)].map((star, i) => (
                                    <span key={i} className="star" style={{ fontSize: '1.5rem', color: '#ffd700' }}>&#9733;</span>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ marginBottom: '20px' }}>
                        <Card.Body>
                            <Card.Title>Użytkownik 3</Card.Title>
                            <Card.Text>
                                Film był dobry, ale mogło być lepiej.
                            </Card.Text>
                            <div>
                                {[...Array(3)].map((star, i) => (
                                    <span key={i} className="star" style={{ fontSize: '1.5rem', color: '#ffd700' }}>&#9733;</span>
                                ))}
                                {[...Array(2)].map((star, i) => (
                                    <span key={i} className="star" style={{ fontSize: '1.5rem', color: '#ccc' }}>&#9733;</span>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Card style={{ marginBottom: '20px' }}>
                        <Card.Body>
                            <Card.Title>Użytkownik 1</Card.Title>
                            <Card.Text>
                                Świetny film! Polecam każdemu fanowi sci-fi.
                            </Card.Text>
                            <div>
                                {[...Array(4)].map((star, i) => (
                                    <span key={i} className="star" style={{ fontSize: '1.5rem', color: '#ffd700' }}>&#9733;</span>
                                ))}
                                {[...Array(1)].map((star, i) => (
                                    <span key={i} className="star" style={{ fontSize: '1.5rem', color: '#ccc' }}>&#9733;</span>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ marginBottom: '20px' }}>
                        <Card.Body>
                            <Card.Title>Użytkownik 2</Card.Title>
                            <Card.Text>
                                Efekty specjalne są niesamowite, a fabuła trzyma w napięciu.
                            </Card.Text>
                            <div>
                                {[...Array(5)].map((star, i) => (
                                    <span key={i} className="star" style={{ fontSize: '1.5rem', color: '#ffd700' }}>&#9733;</span>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ marginBottom: '20px' }}>
                        <Card.Body>
                            <Card.Title>Użytkownik 3</Card.Title>
                            <Card.Text>
                                Film był dobry, ale mogło być lepiej.
                            </Card.Text>
                            <div>
                                {[...Array(3)].map((star, i) => (
                                    <span key={i} className="star" style={{ fontSize: '1.5rem', color: '#ffd700' }}>&#9733;</span>
                                ))}
                                {[...Array(2)].map((star, i) => (
                                    <span key={i} className="star" style={{ fontSize: '1.5rem', color: '#ccc' }}>&#9733;</span>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};