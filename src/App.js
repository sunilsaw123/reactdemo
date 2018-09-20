import React, { Component } from 'react';
import './App.css';
import Routes from './Routes'; 
import Footer from './Component/Footer'; 
import HomeComponent from "./Component/HomeComponent";
import About from  "./Component/AboutUsComponent";
import logo from './logo.svg';
import Redux from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
           
         </header>
          <Routes />
         
          <Footer />     
      </div>
      
    );
  }
  
}
export default App;


