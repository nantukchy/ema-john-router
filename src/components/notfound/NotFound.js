import React from 'react';

const NotFound = () => {
    const hstyle = {
        color: 'blue',
        fontWeight: 'bold',
        textAlign:'center'
    }
    return (
        <div style={hstyle}>
            <h1>404</h1>
            <h1>Sorry this page not found</h1>
        </div>
    );
};

export default NotFound;