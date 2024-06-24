import Container from 'react-bootstrap/Container';
import { FilmReview } from './FilmReview/FilmReview.jsx';
import { Karuzela } from './Karuzela/Karuzela.jsx';
import { VideoFrame } from './VideoFrame/ViedoFrame.jsx';
export const FilmViewSkazani = () => {
    return (
        <Container fluid style={{ color: '#ffffff', margin: 0, padding: 0, }}>

            <Karuzela/>
            <FilmReview/>
        </Container>
    )
}
