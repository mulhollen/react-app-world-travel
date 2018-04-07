import React from 'react';
import './App.css'

const guidesInfo = [{
    "type": "city",
    "title": "Paris on $10 a Day",
    "price": 18.99
}, {
    "type": "city",
    "title": "Venice: Canals and Stuff",
    "price": 14.50
}, {
    "type": "city",
    "title": "Visiting Hoboken: Why?",
    "price": 1.25
}, {
    "type": "country",
    "title": "Touring Brazil's Empty Olympic Stadiums",
    "price": 13.50
}, {
    "type": "country",
    "title": "'Murica: Only Commies Travel Abroad",
    "price": 20.00
}, {
    "type": "country",
    "title": "Australia: Every Animal Here Can Kill You",
    "price": 18.00
}, {
    "type": "region",
    "title": "Backpacking Europe on Two Showers a Week",
    "price": 12.48
}, {
    "type": "region",
    "title": "Rainforests of Cental America",
    "price": 15.00
}, {
    "type": "region",
    "title": "The Evil Genius Guide to Taking over the Tri City Area",
    "price": 13.49
}]

class Guides extends React.Component {
    render() {
        const listItems = guidesInfo.map((link) =>
            <div>
                <h3>{link.title}</h3>
                <h5>{link.price}</h5>
                <p>{link.type}</p>
            </div>
        );
        return (
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    } 
}


export default Guides;