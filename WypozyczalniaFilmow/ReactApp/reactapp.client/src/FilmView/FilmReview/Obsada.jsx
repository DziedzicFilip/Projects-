
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import Image from '../../assets/GLucas.jpg'; 

const Obsada = () => {
    const actors = [
        {
            name: 'John Doe',
            rating: 3 
        },
        {
            name: 'Jane Smith',
            rating: 4
        },
        {
            name: 'Michael Johnson',
            rating: 5
        },
        {
            name: 'John Doe',
            rating: 3
        },
        {
            name: 'Jane Smith',
            rating: 4
        },
        {
            name: 'Michael Johnson',
            rating: 5
        },
    ];

   

    return (
        <Carousel interval={null} indicators={false} nextIcon={<span className="carousel-control-next-icon" style={{ color: '#000' }}>&#x276f;</span>} prevIcon={<span className="carousel-control-prev-icon" style={{ color: '#000', marginTop: '100px' }}>&#x276e;</span>}>
            {[...Array(Math.ceil(actors.length / 3))].map((_, index) => (
                <Carousel.Item key={index}>
                    <Row className="justify-content-center">
                        {actors.slice(index * 3, index * 3 + 3).map((actor, innerIndex) => (
                            <Col key={innerIndex} xs={10} sm={6} md={4} lg={3}>
                                <Card className="mb-3">
                                    <Card.Img variant="top" src={Image} style={{ height: '180px', objectFit: 'cover' }} />
                                    <Card.Body>
                                        <Card.Title>{actor.name}</Card.Title>
                                        <Card.Text>Tu nazwa postaci</Card.Text>
                                        <div>
                                            {[...Array(5)].map((star, i) => (
                                                <span
                                                    key={i}
                                                    className="star"
                                                    style={{
                                                        fontSize: '2rem',
                                                        color: i < actor.rating ? '#ffd700' : '#ccc',
                                                        cursor: 'pointer'
                                                    }}
                                                    
                                                >
                                                    &#9733;
                                                </span>
                                            ))}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Obsada;
