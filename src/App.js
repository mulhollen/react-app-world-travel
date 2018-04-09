import React, { Component } from 'react';
import Title from './Title.js';
import TravelLinks from './TravelLinks.js';
import TravelGuides from './Guides.js';
import Weather from './Weather.js';
import travel from './travel_React.jpg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Title title="World Wide Travel, inc." />
          <Weather />
        </header>
        <img src={travel} className="App-logo" alt="logo" />
        <TravelGuides />
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
