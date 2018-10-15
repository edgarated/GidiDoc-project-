import React, { Component, } from 'react';
import '../Css/Appointment.css';
import Footer from '../Pages/Footer';
import Header from '../Pages/Header';



class Appointment extends Component {
  render() {
    return (
      <div>
           <Header />

      <div className="container">
  <h1 className="well">Appointment Form</h1>
  <div className="col-lg-12 welll">
    <div className="row">
      <form>
        <div className="col-sm-12 bod">
          <div className="row">
            <div className="col-sm-6 form-group">
              <label>First Name</label>
              <input type="text" placeholder="Enter Here.." className="form-control" />
            </div>
            <div className="col-sm-6 form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Enter Here.." className="form-control" />
            </div>
          </div>					
          <div className="form-group">
            <label>Address</label>
            <textarea placeholder="Enter Address Here.." rows={3} className="form-control" defaultValue={""} />
          </div>	
          <div className="row">
            <div className="col-sm-4 form-group">
              <label>Sex </label>
              <input type="text" placeholder="Enter Location Here.." className="form-control" />
            </div>	
            <div className="col-sm-4 form-group">
              <label>Age</label>
              <input type="text" placeholder="Enter Here.." className="form-control" />
            </div>	
            <div className="col-sm-4 form-group">
              <label>Marital Status</label>
              <input type="text" placeholder="Enter Date Here.." className="form-control" />
            </div>		
          </div>					
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter Phone Number Here.." className="form-control" />
          </div>		
          <div className="form-group">
            <label>Email Address</label>
            <input type="text" placeholder="Enter Email Address Here.." className="form-control" />
          </div>	
          
          <div className="form-group">
            <label>Day And Time For Appointment</label>
            <input type="text" placeholder="Enter Here.." className="form-control" />
          </div>	
          <button type="button" className="btn btn-lg btn-info info2-sub">Submit</button>					
        </div>
      </form> 
    </div>
  </div>
</div>
<hr/>

 <Footer />

   
    </div>
        


 
 

    );
  }
}

export default Appointment;
