import React from 'react';
import Container from 'react-bootstrap/Container';

export const VideoFrame = () => {
    return (
        <Container fluid style={{ backgroundColor: '#1a1a1a', color: '#ffffff', margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <iframe
                width="100%"
                height="515"
                src="https://www.youtube.com/embed/r5X-hFf6Bwo?si=Lg_bWmanp-EETRHp"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            ></iframe>
        </Container>
    );
};
