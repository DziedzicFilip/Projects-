import { useState } from 'react';
import { Container, Navbar, Row, Col, Dropdown, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Logo from '../assets/Logo.png';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Nazwa użytkownika jest wymagana'),
    password: Yup.string().required('Hasło jest wymagane')
});

export const Nawigacja = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [userType, setUserType] = useState('user');

    const [loginError, setLoginError] = useState('');

    const userData = {
        admin: {
            username: 'admin',
            password: 'admin',
            type: 'admin'
        },
        user: {
            username: 'user',
            password: 'user',
            type: 'user'
        }
    };

    const handleLogin = (values) => {
        const user = userData[values.username];
        if (user && user.password === values.password) {
            setIsLogged(true);
            setUserType(user.type);
            setLoginError('');
        } else {
            setLoginError('Nieprawidłowa nazwa użytkownika lub hasło');
        }
    };

    const handleLogout = () => {
        setIsLogged(false);
        setUserType('user');
        setUsername('');
        setPassword('');
    };

    const handleAccountType = () => {
        setUserType('user');
    };

    return (
        <Container fluid className='nav-container' style={{ width: '100%' }}>
            <Navbar>
                <Container>
                    <Row className="w-100 justify-content-center align-items-center">
                        <Col className="text-center"> <img src={Logo} alt="Shopping Cart" style={{ width: '33%', }} /></Col>
                        <Col className="text-center display-4">FilmMates</Col>
                        <Col className="text-center">
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    Menu
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='w-100 text-center'>
                                    <Dropdown.Item as={Link} to="/">Strona Główna</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/oferta">Bank Filmów</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/FAQ">FAQ</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Regulamin">Regulamin</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Kontakt">Kontakt</Dropdown.Item>
                                    {!isLogged ? (
                                        <>
                                            <Dropdown.Divider />
                                            <Formik
                                                initialValues={{ username: '', password: '' }}
                                                validationSchema={validationSchema}
                                                onSubmit={(values, { setSubmitting }) => {
                                                    handleLogin(values);
                                                    setSubmitting(false);
                                                }}
                                            >
                                                {({ handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting }) => (
                                                    <Form onSubmit={handleSubmit} className="text-center">
                                                        <Form.Group controlId="formUsername">
                                                            <Form.Control
                                                                type="text"
                                                                name="username"
                                                                placeholder="Nazwa użytkownika"
                                                                value={values.username}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                isInvalid={touched.username && !!errors.username}
                                                                style={{ fontSize: '0.8rem', width: '150px', margin: '5px auto' }}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.username}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                        <Form.Group controlId="formPassword">
                                                            <Form.Control
                                                                type="password"
                                                                name="password"
                                                                placeholder="Hasło"
                                                                value={values.password}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                isInvalid={touched.password && !!errors.password}
                                                                style={{ fontSize: '0.8rem', width: '150px', margin: '5px auto' }}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.password}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                        {loginError && (
                                                            <div className="text-danger" style={{ fontSize: '0.8rem', margin: '5px auto' }}>
                                                                {loginError}
                                                            </div>
                                                        )}
                                                        <Button
                                                            variant="primary"
                                                            type="submit"
                                                            disabled={isSubmitting}
                                                            style={{ fontSize: '0.8rem', padding: '0.25rem 0.5rem', width: '150px', margin: '5px auto' }}
                                                        >
                                                            Zaloguj
                                                        </Button>
                                                    </Form>
                                                )}
                                            </Formik>
                                            <Dropdown.Divider />
                                            <Dropdown.Item as={Link} to="/rejestracja">Nie mam konta</Dropdown.Item>
                                        </>
                                    ) : (
                                        <>
                                            <Dropdown.Divider />
                                            <Dropdown.Item as={Link} to={userType === 'user' ? '/Konto' : '/Zarzadzaj'}>{userType === 'user' ? 'Konto' : 'Zarządzaj'}</Dropdown.Item>
                                            <Dropdown.Item onClick={handleLogout}>Wyloguj</Dropdown.Item>
                                        </>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </Container>
    );
};
