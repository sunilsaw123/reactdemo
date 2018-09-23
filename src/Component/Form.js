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
    let address= this.refs.address.value;
    let message= this.refs.message.value;

    if(this.state.act ===0){
      let data ={
        name,email,phone,address,message
      }
      datas.push(data);
    }else{
      let index = this.state.index;
      datas[index].name =name;
      datas[index].email =email;
      datas[index].phone =phone;
      datas[index].address =address;
      datas[index].message =message;

   }

   this.setState({
    datas:datas,
    act:0
  });

     {/*let data = {
    name, email, addess, phone, message
  }

  datas.push(data);
*/}


  this.refs.myform.reset();
  this.refs.name.focus();
  }

  fRemove = (i) =>{
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });
   
    this.refs.myform.reset();
    this.refs.name.focus();
  }

  fEdit =(i) =>{
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.email.value = data.email;
    this.refs.phone.value = data.phone;
    this.refs.address.value = data.address;
    this.refs.message.value = data.message;
    
    this.setState({
      act:1,
      index:1
    });
    
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
                        <td>{data.address}</td>
                        <td>{data.message}</td>
                       <button onClick={()=>this.fEdit(i)} className="btn btn-info">Edit</button>
                      <button onClick={()=>this.fRemove(i)} className="btn btn-danger">Delete</button>
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

