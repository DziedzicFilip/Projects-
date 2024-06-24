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
import { Menu } from '../Menu/Menu.jsx';
import { Box } from './Box.jsx';
import './BoxCard.css';
import Star from '../../Star/Star.jsx';

const films = [
    {
        title: 'Star Wars - Revange of the Sith',
        description: 'Trzecia część prequela sagi Gwiezdne Wojny, która opowiada o przemianie Anakina Skywalkera w Dartha Vadera podczas kluczowych wydarzeń galaktycznej wojny.',
        image: Image1,
        link: '/FilmView'
    },
    {
        title: 'Skazani na Shawshank',
        description: 'Film oparty na opowiadaniu Stephena Kinga, który śledzi historię Andy\'ego Dufresne\'a, niesłusznie skazanego na dożywocie, i jego przyjaźń z Redem w więzieniu Shawshank.',
        image: Image2,
        link: '/FilmViewSkazani'
    },
    {
        title: 'INCEPCJA',
        description: 'Science fiction Christophera Nolana, gdzie drużyna wykonuje zadanie, wkraczając do snów innych osób, aby zaimplementować pojęcie "inception" (wsadzenie idei) w podświadomość celu.',
        image: Image3,
        link: '/FilmViewIncepcja'
    },
    {
        title: 'NIETYKALNI',
        description: 'Francuski film oparty na prawdziwej historii, który opowiada o nietypowej przyjaźni pomiędzy bogatym niepełnosprawnym a jego opiekunem, który jest byłym więźniem.',
        image: Image4,
        link: '/FilmViewIncepcja'
    },
    {
        title: 'ZIELONA MILA',
        description: 'Ekranizacja powieści Stephena Kinga, która opowiada historię więźnia, Johna Coffeya, oskarżonego o morderstwo dzieci, a także o cudowne wydarzenia, które mają miejsce w więzieniu.',
        image: Image5,
        link: '/FilmViewGreen'
    },
    {
        title: 'WŁADCA PIERŚCIENI: POWRÓT KRÓLA',
        description: 'Trzecia część epickiej trylogii fantasy opartej na książkach J.R.R. Tolkiena, gdzie bohaterowie walczą o przetrwanie Śródziemia, a Aragorn walczy o swoje dziedzictwo i pokonanie ciemności Saurona.',
        image: Image6,
        link: '/FilmViewLORD'
    },
    {
        title: 'Star Wars - Revange of the Sith',
        description: 'Trzecia część prequela sagi Gwiezdne Wojny, która opowiada o przemianie Anakina Skywalkera w Dartha Vadera podczas kluczowych wydarzeń galaktycznej wojny.',
        image: Image1,
        link: '/FilmView'
    },
    {
        title: 'Skazani na Shawshank',
        description: 'Film oparty na opowiadaniu Stephena Kinga, który śledzi historię Andy\'ego Dufresne\'a, niesłusznie skazanego na dożywocie, i jego przyjaźń z Redem w więzieniu Shawshank.',
        image: Image2,
        link: '/FilmViewSkazani'
    },
    {
        title: 'INCEPCJA',
        description: 'Science fiction Christophera Nolana, gdzie drużyna wykonuje zadanie, wkraczając do snów innych osób, aby zaimplementować pojęcie "inception" (wsadzenie idei) w podświadomość celu.',
        image: Image3,
        link: '/FilmViewIncepcja'
    },
    {
        title: 'NIETYKALNI',
        description: 'Francuski film oparty na prawdziwej historii, który opowiada o nietypowej przyjaźni pomiędzy bogatym niepełnosprawnym a jego opiekunem, który jest byłym więźniem.',
        image: Image4,
        link: '/FilmViewIncepcja'
    },
    {
        title: 'ZIELONA MILA',
        description: 'Ekranizacja powieści Stephena Kinga, która opowiada historię więźnia, Johna Coffeya, oskarżonego o morderstwo dzieci, a także o cudowne wydarzenia, które mają miejsce w więzieniu.',
        image: Image5,
        link: '/FilmViewGreen'
    },
    {
        title: 'WŁADCA PIERŚCIENI: POWRÓT KRÓLA',
        description: 'Trzecia część epickiej trylogii fantasy opartej na książkach J.R.R. Tolkiena, gdzie bohaterowie walczą o przetrwanie Śródziemia, a Aragorn walczy o swoje dziedzictwo i pokonanie ciemności Saurona.',
        image: Image6,
        link: '/FilmViewLORD'
    },
];

export const CardBox = () => {
    return (
        <Container fluid style={{ backgroundColor: '#f8f9fa', textAlign: 'center', color: 'black' }} className="p-4">
        <Row><Box/></Row>
            <Row>
                <Col xs={12} md={3} className="p-2">
                    <Menu > </Menu>
                </Col>

                <Col xs={12} md={9} className="p-2 d-flex flex-wrap justify-content-start">
                    {films.map((film, index) => (
                        <Card key={index} style={{ width: '18rem', margin: '10px' }}>
                            <Card.Img variant="top" src={film.image} />
                            <Card.Body>
                                <Card.Title>{film.title}</Card.Title>
                                <Card.Text>{film.description}</Card.Text>
                              
                                {film.link && (
                                    <a href={film.link} target="_blank" >
                                        <Button className="custom-button mt-2">Dowiedz sie wiecej</Button>
                                    </a>
                                )}
                                <Star filledStars={5} ></Star>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}
