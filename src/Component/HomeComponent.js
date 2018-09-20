import React from 'react';
import logo from '../logo.svg';

class HomeComponent extends React.Component {
  render(){
    return(
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
    );
   }
}
 
export default HomeComponent;

