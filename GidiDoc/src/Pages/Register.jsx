import React, { Component, } from 'react';
import Footer from '../Pages/Footer';
import '../Css/Register.css';



class Register extends Component {
  render() {
    return (
      <div>
    
    <div className="container">
  <div className="row">
    <div className="col-md-4 col-sm-4" />
    <div className="col-md-4 col-sm-4">
      <div className="style-me2">
        <form action>
          <div className="form-group">
          <h4 className="text-center pt-5 blueBt">REGISTER HERE</h4>
            <label htmlFor="name"> Username:</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Password:</label>
            <input type="password" className="form-control" id="pwd" />
          </div>
          <button type="submit" className="btn btn-default style-btn">Submit</button>
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

export default Register;
