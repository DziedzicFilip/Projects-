import  { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { MainKaruzela } from '../MainKaruzela/MainKaruzela';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Imię jest wymagane'),
    email: Yup.string().email('Nieprawidłowy email').required('Email jest wymagany'),
    subject: Yup.string().required('Temat jest wymagany'),
    phone: Yup.string()
        .matches(/^[0-9]{9,15}$/, 'Numer telefonu jest nieprawidłowy')
        .required('Telefon jest wymagany'),
    message: Yup.string().required('Wiadomość jest wymagana')
});

export const Kontakt = () => {
  
    const [showSuccess, setShowSuccess] = useState(false);

  

    const handleFocus = (e) => {
        e.target.style.backgroundColor = '#333';
        e.target.style.color = '#ffffff';
    };

  

   

    return (
        <Container fluid style={{ backgroundColor: '#1a1a1a', color: '#ffffff', margin: 0, padding: 0 }}>
            <MainKaruzela>
                <Container style={{
                    maxWidth: '800px', margin: '20px auto', padding: '20px', textAlign: 'center', backgroundColor: 'rgba(211, 211, 211, 0.7)',
                    borderRadius: '8px'
                }}>
                    <h1>Kontakt</h1>
                    {showSuccess && (
                        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                            Wiadomość została wysłana pomyślnie!
                        </Alert>
                    )}
                    <Row>
                        <Col xs={12}>
                            <Formik
                                initialValues={{
                                    name: '',
                                    email: '',
                                    subject: '',
                                    phone: '',
                                    message: ''
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
                                        <Form.Group controlId="formName">
                                            <Form.Label>Imię</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isInvalid={touched.name && !!errors.name}
                                                onFocus={handleFocus}
                                                onBlur={handleBlur}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.name}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="formEmail" style={{ marginTop: '10px' }}>
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
                                        <Form.Group controlId="formSubject" style={{ marginTop: '10px' }}>
                                            <Form.Label>Temat</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="subject"
                                                value={values.subject}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isInvalid={touched.subject && !!errors.subject}
                                                onFocus={handleFocus}
                                                onBlur={handleBlur}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.subject}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="formPhone" style={{ marginTop: '10px' }}>
                                            <Form.Label>Telefon</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="phone"
                                                value={values.phone}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isInvalid={touched.phone && !!errors.phone}
                                                onFocus={handleFocus}
                                                onBlur={handleBlur}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.phone}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="formMessage" style={{ marginTop: '10px' }}>
                                            <Form.Label>Wiadomość</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                name="message"
                                                value={values.message}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isInvalid={touched.message && !!errors.message}
                                                rows={5}
                                                onFocus={handleFocus}
                                                onBlur={handleBlur}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.message}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Button variant="primary" type="submit" disabled={isSubmitting} style={{ marginTop: '10px' }}>
                                            Wyślij
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