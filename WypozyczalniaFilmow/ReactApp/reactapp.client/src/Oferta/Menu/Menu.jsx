import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './Menu.css';

const validationSchema = Yup.object().shape({
    name: Yup.string(),
    genre: Yup.string(),
    year: Yup.number().nullable().min(1900, 'Rok musi być większy niż 1900').max(new Date().getFullYear(), `Rok nie może być większy niż ${new Date().getFullYear()}`),
    rating: Yup.string(),
    director: Yup.string(),
    duration: Yup.number().nullable().min(1, 'Czas trwania musi być większy niż 0'),
    language: Yup.string(),
});

export const Menu = () => {
    const initialValues = {
        name: '',
        genre: '',
        year: '',
        rating: '',
        director: '',
        duration: '',
        language: '',
    };

    const handleFilter = (values) => {
        console.log('Wybrane filtry:', values);
    };

    return (
        <Container fluid style={{ backgroundColor: 'rgb(26, 26, 26)', color: 'black', height: '450px', position: 'sticky', top: 0, zIndex: 1000, marginTop: '20px' }} className="d-flex align-items-center justify-content-center">
            <Container style={{ width: '100%', margin: 'auto' }} className="d-flex flex-column">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleFilter}
                >
                    {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Row className="mb-3" style={{ color: 'white' }}>
                                <Col>
                                    <Form.Group controlId="filterName">
                                        <Form.Label>Podaj Nazwe filmu</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={touched.name && !!errors.name}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.name}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Row></Row>
                                <Col>
                                    <Form.Group controlId="filterGenre">
                                        <Form.Label>Gatunek</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="genre"
                                            value={values.genre}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={touched.genre && !!errors.genre}
                                        >
                                            <option value="">Wybierz gatunek</option>
                                            <option value="action">Akcja</option>
                                            <option value="comedy">Komedia</option>
                                            <option value="drama">Dramat</option>
                                            <option value="sci-fi">Sci-Fi</option>
                                            <option value="fantasy">Fantasy</option>
                                            <option value="thriller">Thriller</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.genre}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Row />
                                <Col>
                                    <Form.Group controlId="filterDirector">
                                        <Form.Label>Reżyser</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="director"
                                            value={values.director}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={touched.director && !!errors.director}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.director}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Row></Row>
                            </Row>
                            <Row className="mb-3" style={{ color: 'white' }}>
                                <Col>
                                    <Form.Group controlId="filterYear">
                                        <Form.Label>Rok</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="year"
                                            value={values.year}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={touched.year && !!errors.year}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.year}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="filterDuration">
                                        <Form.Label>Czas trwania (min)</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="duration"
                                            value={values.duration}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={touched.duration && !!errors.duration}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.duration}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-3" style={{ color: 'white' }}>
                                <Col>
                                    <Form.Group controlId="filterRating">
                                        <Form.Label>Ocena</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="rating"
                                            value={values.rating}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={touched.rating && !!errors.rating}
                                        >
                                            <option value="">Wybierz ocenę</option>
                                            <option value="1">1+</option>
                                            <option value="2">2+</option>
                                            <option value="3">3+</option>
                                            <option value="4">4+</option>
                                            <option value="5">5+</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.rating}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="filterLanguage">
                                        <Form.Label>Język filmu</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="language"
                                            value={values.language}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={touched.language && !!errors.language}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.language}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button variant="primary" type="submit">
                                        Zastosuj filtry
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    )}
                </Formik>
            </Container>
        </Container>
    );
};
