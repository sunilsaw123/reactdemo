import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Component/HomeComponent";
import About from  "./Component/AboutUsComponent";
import Services from  "./Component/ServiceComponent";

class Routes extends React.Component {
  
 render(){
    return(
<Router>
    <div>
      <ul class="nav navbar-nav menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/service">Services</Link>
        </li>
      </ul>
    
      
      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/service" component={Services} />
</div>
  </Router >
  
      );
 }
}
export default Routes;