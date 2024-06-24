import Container from 'react-bootstrap/Container';
import { Box } from './Box/Box.jsx';
import { BoxCard } from './Box/BoxCard.jsx';

export const StronaGlowna = () => {
    return (
        <Container fluid style={{ backgroundColor: '#1a1a1a', color: '#ffffff', margin: 0, padding: 0, }}>
         
            <Box></Box>
            <BoxCard></BoxCard>
            
         
        </Container>
    )
}
