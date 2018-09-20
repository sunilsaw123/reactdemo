import React from 'react';
import InputList from './InputList';
import Nameform from './Nameform';
class AboutUsComponent extends React.Component {
  render(){
    return(
        <div>
            <h2>This page for About Us!</h2>
            <InputList/>
            <Nameform />
        </div>
        );
   }
}
 
export default AboutUsComponent;

