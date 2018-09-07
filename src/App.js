import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from  './Footer.js';
import Form from  './Form.js';
import Nameform from './Nameform.js';
import Test from './Test.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li> 
            <li><a href="#">Page 3</a></li>
          </ul>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>What is Lorem Ipsum?</h3>
              <img src={logo} className="App-logo" alt="logo" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
                s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
            <div className="col-md-6">
              <h3>What is Lorem Ipsum?</h3>
              <img src={logo} className="App-logo" alt="logo" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
                s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            
            </div>
            </div>
        </div>
        <div className="container">
         <div className="row">
          <div className="col sm-6 "> <Form /></div>
          <div className="col sm-6 ">
                <Test />
                <Nameform />
          </div>
         </div>  
        </div>  
       <Footer />
      </div>
      
    );
  }
}
export default App;


