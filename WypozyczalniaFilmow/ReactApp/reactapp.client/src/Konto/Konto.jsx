import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TableOfContents } from './TableOfContents';
import { ContentBlock } from './ContentBlock';
import { MainKaruzela } from '../MainKaruzela/MainKaruzela';
import { BorrowedMoviesContext } from '../BorrowedMoviesProvider';  

const contentData = [
    { id: 1, title: 'Wypożyczone filmy', content: 'Witamy w naszej wypożyczalni filmów. Prosimy o uważne przeczytanie poniższych warunków.' },
    { id: 2, title: 'Członkostwo', content: 'Członkostwo jest wymagane do wypożyczania filmów. Musisz mieć co najmniej 18 lat, aby zostać członkiem.' },
    { id: 3, title: 'Dane Użytkownika', content: 'Filmy można wypożyczać na okres 7 dni. Za zwroty po terminie będą naliczane dodatkowe opłaty.' },
];

export const Konto = () => {
    const [selectedContent, setSelectedContent] = useState(null);
    const { borrowedMovies } = useContext(BorrowedMoviesContext);  

    return (
        <Container style={{
            minHeight: '700px', margin: '20px auto', padding: '20px', textAlign: 'center', backgroundColor: 'rgba(211, 211, 211, 0.7)',
            borderRadius: '8px',
            color: '#FFF'
        }}>
            <h1>Konto</h1>
            <Row>
                <Col xs={3} style={{ borderRight: '1px solid #333' }}>
                    <TableOfContents contentData={contentData} onSelect={setSelectedContent} />
                </Col>
                <Col xs={9}>
                    <ContentBlock content={selectedContent} borrowedMovies={borrowedMovies} />
                </Col>
            </Row>
        </Container>
    );
};
