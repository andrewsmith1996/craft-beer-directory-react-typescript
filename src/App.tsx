import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { CONFIG } from './enums/config.enum';
import Card from './components/card/Card';

export default class App extends Component {
  
  state: any = {
    randomBeer: null
  }
  componentDidMount() {
    console.log(this.state);
    fetch(`${CONFIG.API_URL}/beers/random`).then(response => response.json()).then(beer => this.setState({randomBeer: beer[0]}));
    console.log(this.state);
  }

  render() {
      return (
        <div className="App">
        <Header />
        <Card beer={this.state.randomBeer} />
      </div>
    );
  }
}
