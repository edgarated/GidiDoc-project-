import React, { Component, } from 'react';
import '../Css/Clinic.css';
import Footer from '../Pages/Footer';
import Header from '../Pages/Header';



class Clinic extends Component {
  render() {
    return (
      <div>
           <Header />

      <div className="container">
  <h1 className="well">Clinic Registration Form</h1>
  <div className="col-lg-12 welll">
    <div className="row">
      <form>
        <div className="col-sm-12 bod">
          <div className="row">
            <div className="col-sm-6 form-group">
              <label>Name of Clinic</label>
              <input type="text" placeholder="Enter Here.." className="form-control" />
            </div>
            <div className="col-sm-6 form-group">
              <label>Location of Clinic</label>
              <input type="text" placeholder="Enter Here.." className="form-control" />
            </div>
          </div>					
          <div className="form-group">
            <label>Address</label>
            <textarea placeholder="Enter Address Here.." rows={3} className="form-control" defaultValue={""} />
          </div>	
          <div className="row">
            <div className="col-sm-4 form-group">
              <label>Location </label>
              <input type="text" placeholder="Enter Location Here.." className="form-control" />
            </div>	
            <div className="col-sm-4 form-group">
              <label>Nearest Landmark</label>
              <input type="text" placeholder="Enter Here.." className="form-control" />
            </div>	
            <div className="col-sm-4 form-group">
              <label>Date</label>
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

export default Clinic;
