import React from 'react';
import ReactDOM from 'react-dom';

function Greeting({ username }) {
    return (
        <div>
            {username ? <span>Hello, {username}</span> : <span>Not logged in.</span>}
        </div>
    );
}

function TwoElements() {
    return [
        <div>Hello</div>,
        <div>World</div>
    ];
}

ReactDOM.render(
    <TwoElements />,
    document.getElementById('root')
);
