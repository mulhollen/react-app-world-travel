import React, { Component } from 'react';



class Weather extends Component {

    constructor(props) {
        super(props);

        this.state = {
            weatherLoaded: false,
            objResult: {},
            error: null
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.getWeather();
    }

    getWeather(){
        console.log("get Weather");
        let zipCode = "37216"
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=ea4decbd9523a788936a0d1c56cb5751&units=imperial`)
            .then(res => res.json())
            .then(
            (result) => {
                console.log("result", result);
                this.setState({
                    weatherLoaded: true,
                    objResult: result
                });
            },
            (error) => {
                console.log("error");
                this.setState({
                    isLoaded: true,
                    error: error
                });
            })
        }
    render(){
        const { error, weatherLoaded, objResult } = this.state;

        if (error) {
            return (
                <div>
                    <div>Error: {error.message}</div>
                </div>
            )
        } else if (!weatherLoaded) {
            return <div>Loading... </div>
        } else {
            return (
                <div>
                    <h5>Current Weather for {objResult.name}: {objResult.main.temp}&deg;F</h5>
                </div>
            )
        }
    }
}

export default Weather;