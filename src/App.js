import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Title from './Title.js';
import TravelLinks from './TravelLinks.js';
import TravelGuides from './Guides.js';
import Weather from './Weather.js';
import travel from './travel_React.jpg';
import Home from './Home.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Title title="World Wide Travel, inc." />
          <div className="m-5">
            <Weather />
          </div>
        </header>
        <img src={travel} className="App-logo" alt="logo" />
        <div>
          <Router>
            <div>
              <ul className="d-flex flex-row justify-content-center mt-5">
                <li className="p-5"><Link to='/'>Home</Link></li>
                <li className="p-5"><Link to='/Guides'>Guides</Link></li>
              </ul>
                <hr />
                <Route exact path='/' component={Home} />
                <Route exact path='/Guides' component={TravelGuides} />
            </div>
          </Router>

        </div>
        <footer>
          < TravelLinks url="http://www.thisiscleveland.com/contact/publications/visitors-guide/"
            destination="Cleveland" />
          < TravelLinks url="https://washington.org/"
            destination="Washington" />
          < TravelLinks url="https://www.visitcopenhagen.com/copenhagen-tourist"
            destination="Copenhagen" />
          < TravelLinks url="https://www.visitakron-summit.org/"
            destination="Akron" />        
          <p>&copy; 2018 Lindsay Mulhollen - Travel Guru</p>
        </footer>
      </div>
    );
  }
}

export default App;
