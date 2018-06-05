import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
    return React.createElement('div', {},
        React.createElement('h1', {}, 'HELLO'),
        React.createElement('h3', {}, 'WORLD'),
        React.createElement('h6', {}, 'TEST')
    );
}

ReactDOM.render(
    <HelloWorld />,
    document.querySelector('#root')
);
