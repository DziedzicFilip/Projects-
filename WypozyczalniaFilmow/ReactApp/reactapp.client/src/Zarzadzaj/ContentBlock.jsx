import { useState } from 'react';
import { Row, Col, Form, Button, Container, Modal, Table } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    login: Yup.string().required('Login jest wymagany'),
    password: Yup.string().required('Hasło jest wymagane'),
    email: Yup.string().email('Nieprawidłowy email').required('Email jest wymagany')
});

export const ContentBlock = ({ content }) => {
    const [showModal, setShowModal] = useState(false);
    const [showReviewsModal, setShowReviewsModal] = useState(false);
    const userDataFilms = {
        login: 'john_doe',
        joinDate: '2022-05-01',
        membershipDuration: '30 dni',
        numerOfTaken: 15,
        numerOfFilms: 10,
        numerOfReviews: 5,
        reviews: [
            { id: 1, movieTitle: 'Inception', rating: 4.5, review: 'Great movie!' },
            { id: 2, movieTitle: 'The Shawshank Redemption', rating: 5, review: 'One of the best movies ever!' },
            { id: 3, movieTitle: 'Star Wars: Revenge of the Sith', rating: 4, review: 'Good film, but not my favorite in the series.' },
            { id: 4, movieTitle: 'The Dark Knight', rating: 4.8, review: 'Amazing performance by Heath Ledger.' },
            { id: 5, movieTitle: 'The Godfather', rating: 5, review: 'Classic masterpiece.' }
        ]
    };
    const handleCloseModal = () => {
        setShowModal(false);
        window.location.reload();
    };

    const handleShowModal = () => setShowModal(true);
    const handleShowReviewsModal = () => setShowReviewsModal(true);
    const handleCloseReviewsModal = () => setShowReviewsModal(false);

    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        login: 'example_user',
        password: 'password123',
        email: 'user@example.com'
    });

    const handleEdit = () => {
        setIsEditing(true);
    };

    if (!content) {
        return <div style={{ padding: '20px' }}>Wybierz blok z lewej listy, aby zobaczyć zawartość.</div>;
    }

    if (content.id === 1) {
        const movieStats = [
            { id: 1, title: 'Star Wars: Revenge of the Sith', watchTime: '2h 20m', rentals: 120, averageRating: 4.5, numberOfRatings: 80 },
            { id: 2, title: 'Inception', watchTime: '2h 28m', rentals: 90, averageRating: 4.8, numberOfRatings: 70 },
            { id: 3, title: 'Skazani', watchTime: '2h 28m', rentals: 90, averageRating: 4.8, numberOfRatings: 70 },
            { id: 4, title: 'Na ShawShank', watchTime: '2h 28m', rentals: 90, averageRating: 4.8, numberOfRatings: 70 },
            { id: 4, title: 'Ziewlo', watchTime: '2h 28m', rentals: 90, averageRating: 4.8, numberOfRatings: 70 },
        ];

        const totalRatings = movieStats.reduce((acc, curr) => acc + curr.numberOfRatings, 0);
        const totalAverage = movieStats.reduce((acc, curr) => acc + curr.averageRating, 0) / movieStats.length;

        return (
            <Container>
                <h2>{content.title}</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Tytuł</th>
                            <th>Czas trwania</th>
                            <th>Liczba wypożyczeń</th>
                            <th>Średnia ocena</th>
                            <th>Liczba ocen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movieStats.map(movie => (
                            <tr key={movie.id}>
                                <td>{movie.title}</td>
                                <td>{movie.watchTime}</td>
                                <td>{movie.rentals}</td>
                                <td>{movie.averageRating}</td>
                                <td>{movie.numberOfRatings}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Button onClick={handleShowModal}>Wyświetl wykresy</Button>

                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Wykresy statystyk filmów</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Tu będą wykresy...</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Zamknij
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    } else if (content.id === 2) {
        return (
            <Container>
                <h2>{content.title}</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Login</th>
                            <th>Data dołączenia</th>
                            <th>Czas trwania członkostwa</th>
                            <th>Liczba wypożyczeń</th>
                            <th>Ilość aktualnie posiadanych filmów</th>
                            <th>Ilośc recenzji</th>
                            <th>Opinie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{userDataFilms.login}</td>
                            <td>{userDataFilms.joinDate}</td>
                            <td>{userDataFilms.membershipDuration}</td>
                            <td>{userDataFilms.numerOfTaken}</td>
                            <td>{userDataFilms.numerOfFilms}</td>
                            <td>{userDataFilms.numerOfReviews}</td>
                            <td>
                                <Button variant="secondary" onClick={handleShowReviewsModal}>Wyświetl recenzje</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <Modal show={showReviewsModal} onHide={handleCloseReviewsModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Recenzje użytkownika</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tytuł filmu</th>
                                    <th>Ocena</th>
                                    <th>Recenzja</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userDataFilms.reviews.map(review => (
                                    <tr key={review.id}>
                                        <td>{review.id}</td>
                                        <td>{review.movieTitle}</td>
                                        <td>{review.rating}</td>
                                        <td>{review.review}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>Zamknij</Button>
                    </Modal.Footer>
                </Modal>
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
                        onSubmit={(values, { setSubmitting }) => {
                            setUserData(values);
                            setIsEditing(false);
                            setSubmitting(false);
                        }}
                    >
                        {({ handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group as={Row} controlId="formLogin">
                                    <Form.Label column sm={3}>Login:</Form.Label>
                                    <Col sm={6}>
                                        <Form.Control
                                            type="text"
                                            name="login"
                                            placeholder="Wprowadź login"
                                            value={values.login}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={touched.login && !!errors.login}
                                            readOnly={!isEditing}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.login}
                                        </Form.Control.Feedback>
                                    </Col>
                                    <Col>
                                        {!isEditing && <Button variant="secondary" onClick={handleEdit}>Edytuj</Button>}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formPassword">
                                    <Form.Label column sm={3}>Hasło:</Form.Label>
                                    <Col sm={6} style={{ marginTop: '10px' }}>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            placeholder="Wprowadź hasło"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={touched.password && !!errors.password}
                                            readOnly={!isEditing}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.password}
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formEmail">
                                    <Form.Label column sm={3}>Email:</Form.Label>
                                    <Col sm={6} style={{ marginTop: '10px' }}>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="Wprowadź email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={touched.email && !!errors.email}
                                            readOnly={!isEditing}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                                {isEditing && (
                                    <Button variant="secondary" type="submit" disabled={isSubmitting} style={{ marginTop: '10px' }}>
                                        Zapisz
                                    </Button>
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
            </Container>
        );
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>{content.title}</h2>
            <p>{content.content}</p>
        </div>
    );
};
