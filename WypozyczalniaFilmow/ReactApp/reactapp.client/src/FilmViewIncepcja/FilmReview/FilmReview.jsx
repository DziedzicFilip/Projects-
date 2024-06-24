import React, { useState } from 'react';
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
                                state={{ movieTitle: 'Incepcja' }}
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
                                "Incepcja" to opowieść o Dominicku Cobb, złodzieju, który potrafi kraść sekrety z umysłów ludzi podczas snu. Cobb otrzymuje zadanie,
                                aby wykonać incepcję – zaszczepić ideę w podświadomości swojego celu, Roberta Fischera. Zespół Cobba musi pokonać liczne warstwy snu,
                                aby wykonać zadanie. W międzyczasie Cobb zmaga się z własnymi demonami, zwłaszcza z wspomnieniami o swojej zmarłej żonie, Mal.
                                Film kończy się zagadkową sceną, która pozostawia widza z pytaniem, czy Cobb w końcu wrócił do rzeczywistości

                            </p>
                        </Card.Body>
                    </Card>
                    <Card style={{ marginBottom: '20px', backgroundColor: '#1a1a1a', color: 'white' }}>
                        <Card.Body>
                            <h3>Reżyser</h3>
                           
                            <p>
                                Christopher Nolan to brytyjski reżyser znany z innowacyjnych i ambitnych filmów. Jego prace często eksplorują tematy pamięci,
                                czasu i rzeczywistości. Nolan zdobył międzynarodową sławę dzięki filmom takim jak "Memento", "The Dark Knight" i "Inception".
                                Jego styl charakteryzuje się złożonymi
                                narracjami i wizualną precyzją.

                            </p>
                        </Card.Body>
                    </Card>
                    <Card style={{ marginBottom: '20px', backgroundColor: '#1a1a1a', color: 'white' }}>
                        <Card.Body>
                            <h3>Historia Powstania</h3>
                            <p>
                                "Inception" to projekt, który Nolan rozwijał przez prawie dekadę. Scenariusz powstał w 2001 roku,
                                ale filmowanie rozpoczęło się dopiero w 2009 roku. Produkcja obejmowała zdjęcia w różnych
                                lokalizacjach na całym świecie i zaawansowane efekty specjalne. Film miał swoją premierę w 2010 roku
                                i zdobył szerokie uznanie za innowacyjność oraz złożoność fabułyu.
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
