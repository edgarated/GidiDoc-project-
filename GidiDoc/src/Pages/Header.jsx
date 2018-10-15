import React, { Component, } from 'react';
import './Header.css';
import Gidi2 from '../Images/giidii.png';
import { Link } from 'react-router-dom';



class Header extends Component {
  render() {
    return (
      <div>
    
    <section className="common-wrapper header-wrapper">
  <div className="container-fluid">
    <header className="row header">
      <div className="col-lg-3">
        {/* <a href="/"><img src={Gidi2} alt="logo" className="img-responsive" /></a> */}
        <Link to="/" style={{ textDecoration: 'none' }}><h1><span className="gidi-cyan">GidiDoc</span><span className="gidi-cyan2">.com</span></h1></Link>
      </div>
      <div className="col-lg-8 call-area">
       
        <div className="row menu-style">
          <div className="col-lg-4 call-support-wrap">
            <span className="call-support hidden-sm hidden-xs" />
            <h2 className="roboto-regular">
              +2348036854942
              <span className="call-desc roboto-light">Call for customer support</span>
            </h2>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 call-appointment-wrap">
            <span className="call-appointment hidden-sm hidden-xs" />
            <h2 className="roboto-regular">
              +2348054612384
              <span className="call-desc roboto-light">Call for an appointment at a Clinic</span>
            </h2>
          </div>
          <div className="col-lg-2 brtop-10 header-login " id="login_user">
            <Link to="/Signin" className="btn blue-btn roboto-regular">Login </Link>
           
          </div>

          <div className="col-lg-2 brtop-10 header-login " id="login_user">
            <Link to="/Register" className="btn green-btn roboto-regular"> Register</Link>
           
          </div>
        </div>
       
      </div>
    </header>
  </div>
</section>

</div>


 
 

    );
  }
}

export default Header;
