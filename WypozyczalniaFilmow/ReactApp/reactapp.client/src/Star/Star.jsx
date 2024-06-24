import React, { useState } from 'react';
import { Tooltip, OverlayTrigger, Modal, Button, Card, Row, Col } from 'react-bootstrap';

const Star = ({ filledStars }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
        window.location.reload(); 
    };
    const handleShow = () => setShowModal(true);

    const totalStars = 5;
    const unfilledStars = totalStars - filledStars;

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Zobacz opinie
        </Tooltip>
    );

    return (
        <div>
            <OverlayTrigger
                placement="top"
                overlay={renderTooltip}
            >
                <div onClick={handleShow} style={{ cursor: 'pointer', display: 'inline-block' }}>
                    {[...Array(filledStars)].map((star, i) => (
                        <span key={`filled-${i}`} className="star" style={{ fontSize: '1.5rem', color: '#ffd700' }}>&#9733;</span>
                    ))}
                    {[...Array(unfilledStars)].map((star, i) => (
                        <span key={`unfilled-${i}`} className="star" style={{ fontSize: '1.5rem', color: '#ccc' }}>&#9733;</span>
                    ))}
                </div>
            </OverlayTrigger>

            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Opinie i statystyki</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Statystyki filmu</h5>
                    <p>Średnia ocena: 5.0</p>
                    <p>Liczba recenzji: 1234</p>
                    <p>Liczba wypozyczeń: 4000</p>

                    <hr />
                    <h5>Opinie użytkowników</h5>
                    <Row>
                        <Col>
                            <Card className="mb-2">
                                <Card.Body>
                                    <Card.Title>Użytkownik1</Card.Title>
                                    <Card.Text>Świetny film, polecam!</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="mb-2">
                                <Card.Body>
                                    <Card.Title>Użytkownik2</Card.Title>
                                    <Card.Text>Bardzo mi się podobało, wspaniała gra aktorska.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="mb-2">
                                <Card.Body>
                                    <Card.Title>Użytkownik3</Card.Title>
                                    <Card.Text>Bardzo mi się podobało, wspaniała gra aktorska.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="mb-2">
                                <Card.Body>
                                    <Card.Title>Użytkownik4</Card.Title>
                                    <Card.Text>Bardzo mi się podobało, wspaniała gra aktorska.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Zamknij
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Star;
