import React, { Component, } from 'react';
import './Footer.css';




class Footer extends Component {
  render() {
    return (
      <div>
    <section className="common-wrapper footer-links">
    <footer className="common-wrapper footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
        <p className="roboto-light">Copyright © 2018 . All rights reserved.</p>
      </div>
      <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 links">
        <p className="roboto-light">Contact us : +2348036854942 | Email : <a href="support@gididoc.com">support@gididoc.com</a> | <a href="/privacy-policy.html/" target="_blank">Privacy Policy</a> | <a href="/terms_and_conditions.html/" target="_blank">Terms of Use</a> </p>
      </div>
    </div>
  </div>
</footer>
</section>

   
          </div>
        


 
 

    );
  }
}

export default Footer;
