import  { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TableOfContents } from './TableOfContents';
import { ContentBlock } from './ContentBlock';

const contentData = [
    { id: 1, title: 'Statystyki Filmów', content: '' },
    { id: 2, title: 'Statystyki Użytkowników', content: '' },
    { id: 3, title: 'Dane Użytkownika', content: '' },
  


];

export const Zarzadzaj = () => {
    const [selectedContent, setSelectedContent] = useState(null);

    return (
        
             <Container style={{
            minHeight:'700px', margin: '20px auto', padding: '20px', textAlign: 'center', backgroundColor: 'rgba(211, 211, 211, 0.7)',
                borderRadius: '8px',
                color: '#FFF'
            }}>
                <h1>Zarzadzaj</h1>
                <Row>
                    <Col xs={3} style={{ borderRight: '1px solid #333' }}>
                        <TableOfContents contentData={contentData} onSelect={setSelectedContent} />
                    </Col>
                    <Col xs={9}>
                        <ContentBlock content={selectedContent} />
                    </Col>
                </Row>
          

        </Container>
    );
};
