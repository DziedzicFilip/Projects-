import Container from 'react-bootstrap/Container';
import { Nawigacja } from '../Nav/Nav.jsx';
import { Stopka } from '../Footer/Footer.jsx';

export const Layout = (props) => {
    return (
        <Container fluid style={{ backgroundColor: '#1a1a1a', color: '#ffffff', margin: 0, padding: 0 }}>
            <Nawigacja />
            {props.children}
            <Stopka />
        </Container>
    )
}