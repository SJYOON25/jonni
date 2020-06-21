import React, { Component } from 'react';
import { BroweserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component{
  render(){
    return (
      <Router> 
        <div className ="container">
          <h2>YO YO YO ITS YOUR BOY</h2>
        </div>

        <Route path = "/" exact component = {TODOS}/>
        <Route path = "/edit/:id" exact component = {EDITTODOS}/>
       
      </Router>
      
    
    );
  }
}

export default App;
 