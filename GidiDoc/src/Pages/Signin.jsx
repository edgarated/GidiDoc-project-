import React, { Component, } from 'react';
import Footer from '../Pages/Footer';
import '../Css/Signin.css';



class Signin extends Component {
  render() {
    return (
      <div>
         
     
<div className="container">
  <div className="row">
    <div className="col-md-4 col-sm-4" />
    <div className="col-md-4 col-sm-4">
      <div className="style-me">
        <form action>
        <h4 className="text-center pt-5 amBlue">LOGIN HERE</h4>
          <div className="form-group">
            <label htmlFor="name"> Username:</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Password:</label>
            <input type="password" className="form-control" id="pwd" />
          </div>
          <button type="submit" className="btn btn-default style3-btn">Submit</button>
        </form>
      </div>
    </div>
  </div>
</div>

<hr/>

 <Footer />
   
    </div>
        


 
 

    );
  }
}

export default Signin;
