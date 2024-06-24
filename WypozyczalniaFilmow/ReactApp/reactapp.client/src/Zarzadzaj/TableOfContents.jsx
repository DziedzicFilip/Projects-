import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export const TableOfContents = ({ contentData, onSelect }) => {
    return (
        <ListGroup>
            {contentData.map(item => (
                <ListGroup.Item
                    key={item.id}
                    action
                    onClick={() => onSelect(item)}
                    style={{ backgroundColor: '#1a1a1a', color: '#ffffff', border: 'none', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#1a1a1a'}
                >
                    {item.title}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};