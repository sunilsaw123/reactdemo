import React from 'react';
import Button from './ButtonComponent.js';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     title: 'Stay in Touch',
     act:0,
     index:'',
     datas:[]
    };
  }
  componentDidMount(){
    this.refs.name.focus();
  }
   
  fSubmit = (e)=>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name= this.refs.name.value;
    let email= this.refs.email.value;
    let phone= this.refs.phone.value;
    let addess= this.refs.address.value;
    let message= this.refs.message.value;

     let data = {
    name, email, addess, phone, message
  }

  datas.push(data);

  this.setState({
    datas:datas
  });

  this.refs.myform.reset();
  this.refs.name.focus();
  }

  render(){
    let datas = this.state.datas;
    return(
      <div className="forms">
               <h2>{this.state.title}</h2>
                <form ref="myform">
                  <label>Name:</label>
                   <input type="text" ref="name"  requeird/><br/>
                  <label> Email:</label>
                   <input type="text" ref="email"  requeird/><br/>
                  <label>Phone:</label>
                   <input type="text" ref="phone"  requeird/><br/>
                  <label>City:</label>
                   <input type="text" ref="address"  requeird/><br/>
                  <label> Message: </label>
                   <textarea rows="5" cols="30" ref="message"></textarea><br/>
                 
                  <button onClick={(e)=>this.fSubmit(e)} className="btn btn-primary">Submit</button>
                </form>
   
                  <table class="table">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Firstname</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                    datas.map((data,i)=>
                      <tr>
                        <td key={1}>{i+1}.</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>{data.addess}</td>
                        <td>{data.message}</td>
                       <button onClick={()=>this.fedit(i)} className="btn btn-info">Edit</button>
                      <button onClick={()=>this.fedit(i)} className="btn btn-danger">Delete</button>
                      </tr>
                    )}
                    </tbody>
                  </table>
                {/*<pre>
                  {
                    datas.map((data,i)=>
                    <li key={1} className="mylist">
                      {i+1}. {data.name},{data.email},{data.phone}, {data.addess},{data.message}
                      <button onClick={()=>this.fedit(i)} className="btn btn-info">Edit</button>
                      <button onClick={()=>this.fedit(i)} className="btn btn-danger">Delete</button>
                    </li>
                    )}
                </pre>*/}
        </div>
    );
   }
}

 
export default Form;

