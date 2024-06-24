/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';
import { Card, Row, Col, Form, Button, Container } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Star from '../Star/Star.jsx';


export const ContentBlock = ({ content, borrowedMovies }) => {
    const [membershipStart, setMembershipStart] = useState(new Date());
    const [membershipDuration, setMembershipDuration] = useState(30);
    const [remainingDays, setRemainingDays] = useState(30);
    const [giftCode, setGiftCode] = useState('');
    const [isMembershipExtended, setIsMembershipExtended] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            const currentTime = new Date();
            const diffTime = Math.abs(currentTime - membershipStart);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            const remaining = membershipDuration - diffDays;
            setRemainingDays(remaining);
        }, 1000);

        return () => clearInterval(timer);
    }, [membershipStart, membershipDuration]);

    const handleExtendMembership = () => {
        setIsMembershipExtended(true);
    };

    const handleGiftCodeChange = (e) => {
        setGiftCode(e.target.value);
    };

    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        login: 'example_user',
        password: 'password123',
        email: 'user@example.com'
    });

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    const validationSchema = Yup.object({
        login: Yup.string()
            .required('Login wymagin')
            .min(3, 'Login musi miec 3 znaki minimalie '),
        password: Yup.string()
            .required('Haslo wymagane ')
            .min(8, 'Minium 8 znakow'),
        email: Yup.string()
            .required('Email wymagany')
            .email('Bład formatu'),
    });

    if (!content) {
        return <div style={{ padding: '20px' }}>Wybierz blok z lewej listy, aby zobaczyć zawartość.</div>;
    }

    if (content.id === 1) {
        return (
            <Container>
                <div style={{ padding: '20px' }}>
                    <h2>{content.title}</h2>
                    <Row>
                        {borrowedMovies.map((movie, index) => (
                            <Col key={index} style={{ paddingRight: '5px', paddingBottom: '5px' }}>
                                <Card style={{ width: '10rem' }}>
                                    <Card.Body>
                                        <Card.Title>{movie.movieTitle}</Card.Title>
                                        <Card.Text>
                                            Data wypożyczenia: {movie.rentalDate}<br />
                                            Data zwrotu: {movie.returnDate}
                                        </Card.Text>
                                        <Star filledStars={5} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        );
    } else if (content.id === 2) {
        return (
            <Container>
                <div style={{ padding: '20px', margin: 'auto', textAlign: 'center' }}>
                    <h2>{content.title}</h2>
                    <Row>
                        <Col style={{ paddingRight: '5px', margin: 'auto' }}>
                            <p>Czas trwania członkostwa: {membershipDuration} dni</p>
                            <p>Pozostałe dni członkostwa: {remainingDays} dni</p>
                            {!isMembershipExtended && (
                                <>
                                    <Form.Group controlId="giftCode">
                                        <Form.Label>Kod karty podarunkowej:</Form.Label>
                                        <Form.Control type="text" placeholder="Wpisz kod" value={giftCode} onChange={handleGiftCodeChange} style={{ width: '150px', margin: 'auto' }} />
                                    </Form.Group>
                                    <Button variant="secondary" onClick={handleExtendMembership}>Przedłuż członkostwo</Button>
                                </>
                            )}
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    } else if (content.id === 3) {
        return (
            <Container>
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <h2>{content.title}</h2>
                    <Formik
                        initialValues={userData}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            setUserData(values);
                            setIsEditing(false);
                        }}
                    >
                        {({ values, handleChange, handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group as={Row} controlId="formLogin">
                                    <Form.Label column sm={3}>Login:</Form.Label>
                                    <Col sm={6}>
                                        <Field
                                            className="form-control"
                                            type="text"
                                            name="login"
                                            placeholder="Wprowadź login"
                                            value={values.login}
                                            onChange={handleChange}
                                            readOnly={!isEditing}
                                        />
                                        <ErrorMessage name="login" component="div" className="text-danger" />
                                    </Col>
                                    <Col>
                                        {!isEditing && <Button variant="secondary" onClick={handleEdit}>Edytuj</Button>}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formPassword">
                                    <Form.Label column sm={3}>Hasło:</Form.Label>
                                    <Col sm={6} style={{ marginTop: '10px' }}>
                                        <Field
                                            className="form-control"
                                            type="password"
                                            name="password"
                                            placeholder="Wprowadź hasło"
                                            value={values.password}
                                            onChange={handleChange}
                                            readOnly={!isEditing}
                                        />
                                        <ErrorMessage name="password" component="div" className="text-danger" />
                                    </Col>
                                    <Col style={{ marginTop: '10px' }}>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formEmail">
                                    <Form.Label column sm={3}>Email:</Form.Label>
                                    <Col sm={6} style={{ marginTop: '10px' }}>
                                        <Field
                                            className="form-control"
                                            type="email"
                                            name="email"
                                            placeholder="Wprowadź email"
                                            value={values.email}
                                            onChange={handleChange}
                                            readOnly={!isEditing}
                                        />
                                        <ErrorMessage name="email" component="div" className="text-danger" />
                                    </Col>
                                    <Col style={{ marginTop: '10px' }}>
                                    </Col>
                                </Form.Group>
                                {isEditing && (
                                    <Button variant="secondary" type="submit" style={{ marginTop: '10px' }}>
                                        Zapisz
                                    </Button>
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
            </Container>
        );
    } else {
        return (
            <Container>
                <div style={{ padding: '20px' }}>
                    <h2>{content.title}</h2>
                    <p>{content.content}</p>
                </div>
            </Container>
        );
    }
};
