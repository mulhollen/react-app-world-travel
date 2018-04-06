import React from 'react';
import './App.css'


function TravelLinks(props) {
    return (
        <div>
            <a href={props.url}>Travel {props.destination}</a>
        </div>
    );
}


export default TravelLinks;