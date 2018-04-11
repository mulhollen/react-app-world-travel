import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        const listItems = guidesInfo.map((link) =>
            <div>
                <div className="card m-5 p-5">
                    <div className="card-body">
                        <h5 className="card-title">{link.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">${link.price}</h6>
                        <p class="card-text">{link.type}</p>
                        <Button color="danger" onClick={this.toggle}>Learn More</Button>
                    </div>
                </div>
                <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                            <p>{link.title}</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
    
        );
        return (
            <div className="d-flex flex-row flex-wrap justify-content-center">
                {listItems}
            </div>
        )
    } 
}


export default Guides;