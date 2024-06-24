import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TableOfContents } from './TableOfContents';
import { ContentBlock } from './ContentBlock';
import { MainKaruzela } from '../MainKaruzela/MainKaruzela';

const contentData = [
    { id: 1, title: 'Wprowadzenie', content: 'Witamy w naszej wypożyczalni filmów. Prosimy o uważne przeczytanie poniższych warunków.' },
    { id: 2, title: 'Członkostwo', content: 'Członkostwo jest wymagane do wypożyczania filmów. Musisz mieć co najmniej 18 lat, aby zostać członkiem.' },
    { id: 3, title: 'Okres wypożyczenia', content: 'Filmy można wypożyczać na okres 7 dni. Za zwroty po terminie będą naliczane dodatkowe opłaty.' },
    { id: 4, title: 'Opłaty i koszty', content: 'Wszystkie opłaty za wypożyczenie muszą być uiszczone w momencie wypożyczenia. Za przetrzymywanie filmów będą naliczane opłaty.' },
    { id: 5, title: 'Uszkodzenia i utrata', content: 'Członkowie są odpowiedzialni za wszelkie uszkodzenia lub utratę wypożyczonych filmów. Za uszkodzenia lub utratę będą naliczane opłaty.' },
    { id: 6, title: 'Polityka prywatności', content: 'Jesteśmy zobowiązani do ochrony Twojej prywatności. Twoje dane osobowe nie będą udostępniane stronom trzecim.' },
    { id: 7, title: 'Zakończenie członkostwa', content: 'Członkostwo może zostać zakończone przez każdą ze stron w dowolnym momencie. Prosimy o zwrot wszystkich wypożyczonych filmów przed zakończeniem członkostwa.' },
    { id: 8, title: 'Informacje kontaktowe', content: 'W przypadku pytań lub wątpliwości, prosimy o kontakt na adres support@movierental.com.' },
    
  
];

export const Regulamin = () => {
    const [selectedContent, setSelectedContent] = useState(null);

    return (
        <Container fluid style={{ backgroundColor: '#1a1a1a', color: '#ffffff', margin: 0, padding: 0 }}>
            <MainKaruzela>   <Container style={{
                maxWidth: '800px', margin: '20px auto', padding: '20px', textAlign: 'center', backgroundColor: 'rgba(211, 211, 211, 0.7)',
                borderRadius: '8px',
                color: '#000000' }}>
                <h1>Regulamin</h1>
                <Row>
                    <Col xs={3} style={{ borderRight: '1px solid #333' }}>
                        <TableOfContents contentData={contentData} onSelect={setSelectedContent} />
                    </Col>
                    <Col xs={9}>
                        <ContentBlock content={selectedContent} />
                    </Col>
                </Row>
            </Container></MainKaruzela>
         
        </Container>
    );
};
