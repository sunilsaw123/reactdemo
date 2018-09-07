import React from 'react';
import Button from './Button.js';

class Form extends React.Component {
  render(){
    return(
      <div className="forms">
               <h2>Stay in Touch</h2>
                <form method="post" action="">
                  <label>Name:</label>
                   <input type="text" name="name" requeird/><br/>
                  <label> Email:</label>
                   <input type="text" name="email" requeird/><br/>
                  <label>Phone:</label>
                   <input type="text" name="phone" requeird/><br/>
                  <label>Address:</label>
                   <input type="text" name="address" requeird/><br/>
                  <label> Message: </label>
                   <textarea rows="5" cols="30"></textarea><br/>
                 
                  <Button classname="btn btn-primary" label="Submit"/>
                </form>
             </div>   
    );
   }
}
 
export default Form;

