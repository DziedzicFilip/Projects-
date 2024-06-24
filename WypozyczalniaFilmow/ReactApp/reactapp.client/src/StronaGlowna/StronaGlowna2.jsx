import Container from 'react-bootstrap/Container';
import { Nawigacja } from '../Nav/Nav.jsx';
import { Box } from './Box/Box.jsx';
import { BoxCard } from './Box/BoxCard.jsx';
import { Stopka } from '../Footer/Footer.jsx';

export const StronaGlowna = () => {
    return (
        <Container fluid style={{ backgroundColor: '#1a1a1a', color: '#ffffff', margin: 0, padding: 0, }}>
            <Nawigacja/>
            <Box></Box>
            <BoxCard></BoxCard>
            
            <Stopka/>
        </Container>
    )
}
