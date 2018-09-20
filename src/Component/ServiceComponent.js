import React from 'react';
import Form from './Form';
import Test from './Test';
class ServiceComponent extends React.Component {
  render(){
    return(
        <div>
          <Test />
          <Form />
       </div>
        );
   }
}
 
export default ServiceComponent;