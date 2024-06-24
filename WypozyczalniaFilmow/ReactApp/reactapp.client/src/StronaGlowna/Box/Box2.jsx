import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Box2.css';
export const Box2 = () => {
    return (
        <Container fluid style={{ height: '700px', backgroundColor: '#f8f9fa', textAlign: 'center' }} className="d-flex justify-content-center align-items-center pb-5">
            <Row className="h-100" style={{width:"80%"} }>
        <Col sm={8} className="bg-primary h-100">
          <div className="d-flex justify-content-center align-items-center h-100">
                        <h2> <p>Oferujemy szeroki wybór filmów do wypożyczenia od [data rozpoczęcia działalności/funkcjonowania].
                            Nasza kolekcja obejmuje najnowsze premiery kinowe, klasyki filmowe oraz wiele innych gatunków.
                            Wypożyczalnia filmów to świetna opcja dla miłośników kina, którzy chcą cieszyć się filmami w wygodny sposób.
                            Koszty wypożyczenia zaczynają się od [cena za dzień/wypożyczenie], z dostępnymi opcjami
                            abonamentowymi dla regularnych klientów. Skontaktuj się z nami, aby dowiedzieć się więcej o naszej ofercie
                            i jak możemy zaspokoić Twoje potrzeby filmowe!
                        </p></h2>
          </div>
        </Col>
                <Col sm={4} className="bg-secondary h-100" >
                    <div className="d-flex justify-content-center align-items-center h-100" >
                        <p>
                            <h3>Ceny wypożyczenia:</h3>
                            <h5>
                            Nowe premiery kinowe: 25 zł/dzień <br/>
                                Klasyki filmowe: 15 zł/dzień <br />
                                Seriale: 20 zł/dzień <br />
                                Gry wideo (jeśli dostępne): 30 zł/dzień <br />
                                Pakiety abonamentowe (miesięczne): <br />
                           
                                Pakiet Podstawowy: 100 zł/miesiąc (do 5 filmów wypożyczanych naraz) <br />
                                Pakiet Premium: 200 zł/miesiąc (nieograniczona liczba wypożyczeń) <br />
                                < h3> Opłaty dodatkowe:</h3>
                                Przedłużenie wypożyczenia: 10 zł/dzień <br />
                                Opóźnienie zwrotu (kara): 20 zł/dzień <br />
                            </h5>
                        </p>
                        </div>
        </Col>
      </Row>
    </Container>
    )
}