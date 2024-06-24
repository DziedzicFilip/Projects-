import  { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MainKaruzela } from '../MainKaruzela/MainKaruzela.jsx';
import { useLocation } from 'react-router-dom';
import { BorrowedMoviesContext } from '../BorrowedMoviesProvider';  

const validationSchema = Yup.object().shape({
    movieTitle: Yup.string().required('Tytuł filmu jest wymagany'),
    borrowerName: Yup.string().required('Imię i nazwisko wypożyczającego są wymagane'),
    email: Yup.string().email('Nieprawidłowy email').required('Email jest wymagany'),
    phone: Yup.string()
        .matches(/^[0-9]{9,15}$/, 'Numer telefonu jest nieprawidłowy') 
        .required('Telefon jest wymagany'),
    rentalDate: Yup.date().required('Data wypożyczenia jest wymagana'),
    returnDate: Yup.date()
        .required('Data zwrotu jest wymagana')
        .min(Yup.ref('rentalDate'), 'Data zwrotu musi być po dacie wypożyczenia'),
});

export const Wypozyczenie = () => {
    const location = useLocation();
    const movieTitle = location.state?.movieTitle || '';
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { addBorrowedMovie } = useContext(BorrowedMoviesContext);  

    return (
        <Container fluid style={{ backgroundColor: '#1a1a1a', color: '#ffffff', margin: 0, padding: '2rem' }}>
            <MainKaruzela style={{ filter: 'blur(5px)' }}>
                <Container style={{
                    backgroundColor: 'rgba(211, 211, 211, 0.7)',
                    padding: '2rem',
                    borderRadius: '8px',
                    maxWidth: '600px',
                    margin: '0 auto',
                    color: '#000000'
                }}>
                    {!formSubmitted ? (
                        <>
                            <h1 className="text-center">Formularz Wypożyczenia Filmu</h1>
                            <Formik initialValues={{ movieTitle: movieTitle, borrowerName: '', email: '', phone: '', rentalDate: '', returnDate: '', }}
                                validationSchema={validationSchema}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        addBorrowedMovie(values);  
                                        setFormSubmitted(true);
                                        setSubmitting(false);
                                    }, 400);
                                }}>
                                {({ handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting, }) => (
                                    <Form noValidate onSubmit={handleSubmit}>
                                        <Form.Group controlId="formMovieTitle">
                                            <Form.Label>Tytuł Filmu</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="movieTitle"
                                                value={values.movieTitle}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isInvalid={touched.movieTitle && !!errors.movieTitle}
                                                style={{ fontSize: '14px' }}
                                                readOnly
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.movieTitle}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group controlId="formBorrowerName">
                                            <Form.Label>Imię i Nazwisko</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="borrowerName"
                                                value={values.borrowerName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isInvalid={touched.borrowerName && !!errors.borrowerName}
                                                style={{ fontSize: '14px' }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.borrowerName}
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
                                                style={{ fontSize: '14px' }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.email}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group controlId="formPhone">
                                            <Form.Label>Telefon</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="phone"
                                                value={values.phone}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isInvalid={touched.phone && !!errors.phone}
                                                style={{ fontSize: '14px' }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.phone}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group controlId="formRentalDate">
                                            <Form.Label>Data Wypożyczenia</Form.Label>
                                            <Form.Control
                                                type="date"
                                                name="rentalDate"
                                                value={values.rentalDate}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isInvalid={touched.rentalDate && !!errors.rentalDate}
                                                style={{ fontSize: '14px' }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.rentalDate}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group controlId="formReturnDate">
                                            <Form.Label>Data Zwrotu</Form.Label>
                                            <Form.Control
                                                type="date"
                                                name="returnDate"
                                                value={values.returnDate}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isInvalid={touched.returnDate && !!errors.returnDate}
                                                style={{ fontSize: '14px' }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.returnDate}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Button variant="secondary" type="submit" disabled={isSubmitting} className="">
                                            Wypożycz
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        </>
                    ) : (
                        <div className="text-center">
                            <h1>Dziękujemy za dokonanie rezerwacji filmu!</h1>
                            <p>Wszystkie szczegóły zostały wysłane na adres email podany w formularzu.</p>
                        </div>
                    )}
                </Container>
            </MainKaruzela>
        </Container>
    );
};
