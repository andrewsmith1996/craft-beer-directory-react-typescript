import React, { Component } from 'react';
import Header from './components/Header';
import './styles/main.css';
import Dashboard from './components/dashboard/Dashboard';
import Discover from './components/discover/Discover';

export default class App extends Component {
    render() {
    return (
      <div className="p-16">
        <Header />
        <div className="flex justify-between items-start">
          <Dashboard />
        </div>
      </div>
    );
  }
}
