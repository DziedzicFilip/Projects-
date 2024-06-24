import React from 'react';

export const ContentBlock = ({ content }) => {
    if (!content) {
        return <div style={{ padding: '20px' }}>Wybierz blok z lewej listy, aby zobaczyć zawartość.</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>{content.title}</h2>
            <p>{content.content}</p>
        </div>
    );
};
