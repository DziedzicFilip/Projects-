/* eslint-disable react/jsx-no-duplicate-props */
import  { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MainKaruzela } from '../MainKaruzela/MainKaruzela';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Nazwa użytkownika jest wymagana'),
    email: Yup.string().email('Nieprawidłowy email').required('Email jest wymagany'),
    password: Yup.string().required('Hasło jest wymagane'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Hasła muszą się zgadzać')
        .required('Potwierdzenie hasła jest wymagane')
});


export const Rejestracja = () => {
    

    const [showSuccess, setShowSuccess] = useState(false);

 

    const handleFocus = (e) => {
        e.target.style.backgroundColor = '#333';
        e.target.style.color = '#ffffff';
    };

   

    return (
        <Container fluid style={{ backgroundColor: '#1a1a1a', color: '#ffffff', margin: 0, padding: 0 }}>
            <MainKaruzela>
                <Container style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', textAlign: 'center', backgroundColor: 'rgba(211, 211, 211, 0.7)', borderRadius: '8px' }}>
                    <h1>Załóż konto</h1>
                    {showSuccess && (
                        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                            Konto zostało utworzone pomyślnie!
                        </Alert>
                    )}
                    <Row>
                        <Col xs={12}>
                            <Formik
                                initialValues={{
                                    username: '',
                                    email: '',
                                    password: '',
                                    confirmPassword: ''
                                }}
                                validationSchema={validationSchema}
                                onSubmit={(values, { setSubmitting, resetForm }) => {
                                    setTimeout(() => {
                                        console.log('Form submitted:', values);
                                        setShowSuccess(true);
                                        resetForm();
                                        setSubmitting(false);
                                    }, 400);
                                }}
                            >
                                {({ handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting }) => (
                                    <Form noValidate onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
                                        <Form.Group controlId="formUsername">
                                            <Form.Label>Nazwa użytkownika</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="username"
                                                value={values.username}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isInvalid={touched.username && !!errors.username}
                                                onFocus={handleFocus}
                                                onBlur={handleBlur}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.username}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="formEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isInvalid={touched.email && !!errors.email}
                                                onFocus={handleFocus}
                                                onBlur={handleBlur}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.email}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="formPassword">
                                            <Form.Label>Hasło</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isInvalid={touched.password && !!errors.password}
                                                onFocus={handleFocus}
                                                onBlur={handleBlur}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.password}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="formConfirmPassword">
                                            <Form.Label>Potwierdź hasło</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="confirmPassword"
                                                value={values.confirmPassword}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isInvalid={touched.confirmPassword && !!errors.confirmPassword}
                                                onFocus={handleFocus}
                                                onBlur={handleBlur}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.confirmPassword}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Button variant="primary" type="submit" disabled={isSubmitting} style={{ marginTop: '10px' }}>
                                            Zarejestruj się
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        </Col>
                    </Row>
                </Container>
            </MainKaruzela>
        </Container>
    );
};
