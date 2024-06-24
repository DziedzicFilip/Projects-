import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image1 from '../assets/FB.png';
import Image2 from '../assets/IG.png';
import Image3 from '../assets/in.png';
import Image4 from '../assets/X.png';
import './Footer.css';
export const Stopka = () =>
{
    return (
        <Stack direction="horizontal" gap={3} className="justify-content-center align-items-center p-3" id="footer">
            <Row className="w-100">
                <Col md={4} className="d-flex justify-content-center">
                    <div className="text-center">
                        <h4>Lokalizacja</h4>
                        <p>123 Anywhere St. Any City ST 12345</p>
                        <p>Tel: +123-456-7890</p>
                        <p>hello@reallygreatsite.com</p>
                    </div>
                </Col>
                <Col md={4} className="d-flex justify-content-center">
                    <div className="text-center">
                        <h4>Godziny</h4>
                        <p>Poniedziałek: 8 – 19</p>
                        <p>Wtorek: 8 – 17</p>
                        <p>Środa: 8 – 17</p>
                        <p>Czwartek: 8 – 17</p>
                    </div>
                </Col>
                <Col md={4} className="d-flex justify-content-center">
                    <div className="text-center">
                        <h4>Social Media</h4>
                        <Row>
                            <Col> <img src={Image1} className="img-fluid"></img></Col>
                            <Col> <img src={Image2} className="img-fluid"></img></Col>
                            <Col> <img src={Image3} className="img-fluid"></img></Col>
                            <Col> <img src={Image4} className="img-fluid"></img></Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Stack>
    )
}