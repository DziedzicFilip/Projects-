import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image1 from '../../assets/StarWars3Logo.jpg';
import Image2 from '../../assets/Shawshank.jpg';
import Image3 from '../../assets/Incepcja-Film.jpg';
import Image4 from '../../assets/nietykalni.jpg';
import Image5 from '../../assets/ZielonaMila.jpg';
import Image6 from '../../assets/WladcyPierscieni.jpg';
import Star from '../../Star/Star.jsx';
import './BoxCard.css';

export const BoxCard = () => {
    return (
        <Container fluid style={{ backgroundColor: '#f8f9fa', textAlign: 'center', color: 'black' }} className="d-flex justify-content-center align-items-center">
            <Container>
                <Row className='pt-4 pb-4'>
                    <Col className='display-4'>Najczesciej ogladane filmy</Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center align-items-center">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={Image1} />
                            <Card.Body>
                                <Card.Title>Star Wars - Revange of the Sith</Card.Title>
                                <Card.Text>
                                    Trzecia część prequela sagi Gwiezdne Wojny, która opowiada o przemianie Anakina Skywalkera w Dartha Vadera podczas kluczowych wydarzeń galaktycznej wojny.
                                </Card.Text>
                                <a href="./FilmView" target="_blank" rel="noopener noreferrer">
                                    <Button className="custom-button">Dowiedz sie wiecej</Button>
                                </a>
                                <Star filledStars={5} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={Image2} />
                            <Card.Body>
                                <Card.Title>Skazani na Shawshank</Card.Title>
                                <Card.Text>
                                    Film oparty na opowiadaniu Stephena Kinga, który śledzi historię Andy'ego Dufresne'a, niesłusznie skazanego na dożywocie, i jego przyjaźń z Redem w więzieniu Shawshank.
                                </Card.Text>
                                <a href="./FilmViewSkazani" target="_blank" rel="noopener noreferrer">
                                    <Button className="custom-button">Dowiedz sie wiecej</Button>
                                </a>
                                <Star filledStars={5} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={Image3} />
                            <Card.Body>
                                <Card.Title>INCEPCJA</Card.Title>
                                <Card.Text>
                                    Science fiction Christophera Nolana, gdzie drużyna wykonuje zadanie, wkraczając do snów innych osób, aby zaimplementować pojęcie "inception" (wsadzenie idei) w podświadomość celu.
                                </Card.Text>
                                <a href="./FilmViewIncepcja" target="_blank" rel="noopener noreferrer">
                                    <Button className="custom-button">Dowiedz sie wiecej</Button>
                                </a>
                                <Star filledStars={5} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center align-items-center">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={Image4} />
                            <Card.Body>
                                <Card.Title>NIETYKALNI</Card.Title>
                                <Card.Text>
                                    Francuski film oparty na prawdziwej historii, który opowiada o nietypowej przyjaźni pomiędzy bogatym niepełnosprawnym a jego opiekunem, który jest byłym więźniem.
                                </Card.Text>
                                <a href="./FilmView" target="_blank" rel="noopener noreferrer">
                                    <Button className="custom-button">Dowiedz sie wiecej</Button>
                                </a>
                                <Star filledStars={5} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={Image5} />
                            <Card.Body>
                                <Card.Title>ZIELONA MILA</Card.Title>
                                <Card.Text>
                                    Ekranizacja powieści Stephena Kinga, która opowiada historię więźnia, Johna Coffeya, oskarżonego o morderstwo dzieci, a także o cudowne wydarzenia, które mają miejsce w więzieniu.
                                </Card.Text>
                                <a href="./FilmViewGreen" target="_blank" rel="noopener noreferrer">
                                    <Button className="custom-button">Dowiedz sie wiecej</Button>
                                </a>
                                <Star filledStars={5} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={Image6} />
                            <Card.Body>
                                <Card.Title>WŁADCA PIERŚCIENI: POWRÓT KRÓLA</Card.Title>
                                <Card.Text>
                                    Trzecia część epickiej trylogii fantasy opartej na książkach J.R.R. Tolkiena, gdzie bohaterowie walczą o przetrwanie Śródziemia, a Aragorn walczy o swoje dziedzictwo i pokonanie ciemności Saurona.
                                </Card.Text>
                                <a href="./FilmViewLORD" target="_blank" rel="noopener noreferrer">
                                    <Button className="custom-button">Dowiedz sie wiecej</Button>
                                </a>
                                <Star filledStars={5} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a href="/oferta" target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" size="lg" className="mb-4 mt-4">
                                Zoabcz cala oferte
                            </Button>
                        </a>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default BoxCard;
