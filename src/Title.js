import React from 'react';
import './App.css'


function Title(props) {
    return (
        <div>
            <h1 className="App-title">{props.title}</h1>
        </div>
    );
}


export default Title;