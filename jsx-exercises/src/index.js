import React from 'react';
import ReactDOM from 'react-dom';

function Greeting({ username }) {
    return (
        <div>
            {username ? <span>Hello, {username}</span> : <span>Not logged in.</span>}
        </div>
    );
}

ReactDOM.render(
    <Greeting username={"Fred"} />,
    document.getElementById('root')
);
