import React, { Component, } from 'react';
import './Home.css';
import Header from '../Pages/Header';
import Footer from '../Pages/Footer';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div>

        <Header />
    
   <div className="common-wrapper search-area-wrap">
  {/* clinic login end*/}
  <div className="container">
    <div className="row">
      <section className="clearfix">
        <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12 text-center hidden-sm hidden-xs">
          {/* <img src="images/ad-banner.png" alt="" class="img-responsive"> */}
          <div id="ad-carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#ad-carousel" data-slide-to={0} className="active" />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img src="http://docsnigeria.com/wp-content/themes/revolution-code-blue/images/emsdoc.png" alt="GidiDoc" className="img-responsive"  />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12 rhs-search-box">
          <span className="cyan-strip" />
          <span className="blue-strip" />
          <h1 className="roboto-light">
            Easy Doctor Booking, now at your fingertips!
          </h1>
          <h5 className="roboto-light text-justify">Booking doctor appointments has never been as easy as it is on GidiDoc. That's one less worry when you need medical attention. With GidiDoc, you can now focus on getting well faster.</h5>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="search-box clearfix">
                <div className="row">
                  <div className="form-inline roboto-regular">
                    <div className="form-group col-lg-3 col-md-12 col-sm-3 col-xs-12">
                      <label className="sr-only" htmlFor="dist_key">Select Location</label>
                      <select name="dist_key" id="dist_key" className="roboto-regular form-control search_by_district_from_login">
                        <option value>Select Location</option>
                        <option value={1}>
                          Ikeja
                        </option>
                        <option value={2}>
                          Victoria Island
                        </option>
                        <option value={3}>
                          Ikoyi
                        </option>
                        <option value={4}>
                          VGC
                        </option>
                        <option value={5}>
                          Isolo
                        </option>
                        <option value={6}>
                          Mushin
                        </option>
                        <option value={7}>
                          Ojuelegba
                        </option>
                        <option value={8}>
                          Oshodi
                        </option>
                        <option value={9}>
                          Ilesha
                        </option>
                        <option value={10}>
                          Ketu
                        </option>
                        <option value={11}>
                          Yaba
                        </option>
                      </select>
                    </div>
                    <div className="form-group col-lg-7 col-md-12 col-sm-7 col-xs-12"> 
                        <label className="sr-only" htmlFor="search_key">Search Hospital / Specialisation</label>
                        <input type="text" className="form-control ui-autocomplete-input" name="search_key" id="search_key" placeholder="Search Hospitals/Clinics/Doctors/Specialisations" onkeydown="Javascript: if (event.keyCode==13) HomeSearch()" autoComplete="off" />                           
                    </div>                                                                       
                   
                    <div className="form-group col-lg-2 col-md-12 col-sm-2 col-xs-12">
                      <button className="btn cyan-btn">SEARCH</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 count-main">
          <div className="row brtop-30">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
              <div className="row">
                <a href="/hospitals/">
                  <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 noPaddingRight text-center">
                    <img src="https://static.qkdoc.com/static/pw_v3/images/hospitals-ico.png" alt=" " />
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                    <h4 className="roboto-medium">163</h4>
                    <p className="roboto-regular">Hospitals</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
              <div className="row">
                <a href="/clinics/">
                  <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 noPaddingRight text-center">
                    <img src="https://static.qkdoc.com/static/pw_v3/images/clinics-ico.png" alt=" " />
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                    <h4 className="roboto-medium">145</h4>
                    <p className="roboto-regular">Clinics</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="row">
                <a href="/create-appointment/?search=&district_id=&lat=&lng=&source=homepage&filter_type=all&search_type=D">
                  <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 noPaddingRight text-center">
                    <img src="https://static.qkdoc.com/static/pw_v3/images/doctors-ico.png" alt=" " />
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                    <h4 className="roboto-medium">3033</h4>
                    <p className="roboto-regular">Doctors</p>
                  </div>
                </a>
              </div>
            </div>
      
          </div>
        </div>
      </section>
      {/* search area end */}
    </div>
  </div>
</div>

{/* FOR CAROUSEL */}

<div className="container">
  <div className="row blog">
    <div className="col-md-12">
      <div id="blogCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#blogCarousel" data-slide-to={0} className="active" />
          <li data-target="#blogCarousel" data-slide-to={1} />
        </ol>
        {/* Carousel items */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md">
               <a href="">
                  <img src="https://hotels.ng/places/media/poi/1959/noi-1959-57b675f19dbf3.jpg?w=400" alt="slide" style={{maxWidth: '100%'}} />
                </a>
              </div>

               <div className="col-md">
                <a href="">
                  <img src="http://www.nairaland.com/attachments/3103151_image_jpeg_jpeg6f95b5e7a24ad4fc0808d6698fd37362" alt="slide" style={{maxWidth: '100%'}} />
                </a>
              </div>

               <div className="col-md">
                <a href="">
                  <img src="https://babymigo.com/public/uploads/enFD9d2alApz_resized.jpg" alt="slide" style={{maxWidth: '100%'}} />
                </a>
              </div>
              <div className="col-md">
                <a href="">
                  <img src="https://www.grupohpa.com/uploads/media/2d0c6d17820b91f84ee69e70f0d15e30_W36vYxt.jpg" alt="slide" style={{maxWidth: '100%'}} />
                </a>
              </div>

              <div className="col-md">
                <a href="">
                  <img src="http://logbaby.com/files/logo/15390.jpg" alt="slide" style={{maxWidth: '100%'}} />
                </a>
              </div>

               <div className="col-md">
                
              </div>
            </div>
            {/*.row*/}
          </div>
          {/*.item*/}
          <div className="carousel-item">
            <div className="row">
              <div className="col-md">
                <a href="">
                  <img src="https://www.thebridgeclinic.com/img/logo.png"  alt="slide" style={{maxWidth: '100%'}} />
                </a>
              </div>
              <div className="col-md">
                <a href="">
                  <img src="https://i1.wp.com/web.ssdentalclinicltd.com/wp-content/uploads/2016/01/SS-DENTAL-CLINIC-LOGO.png?fit=1371%2C571" alt="slide" style={{maxWidth: '100%'}} />
                </a>
              </div>
              <div className="col-md">
                <a href="">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN708vT3zUcVxE9oY3j7CW3FORcVR8Zn3XR2wS_bAScWr2n5NQvw" alt="slide" style={{maxWidth: '100%'}} />
                </a>
              </div>
              <div className="col-md">
                <a href="">
                  <img src="http://www.ikejamedicalcentre.org/images/Hospital%20logo.gif" alt="slide" style={{maxWidth: '100%'}} />
                </a>
              </div>
            </div>
            {/*.row*/}
          </div>
          {/*.item*/}
        </div>
        {/*.carousel-inner*/}
      </div>
      {/*.Carousel*/}
    </div>
  </div>
</div>

<section className="common-wrapper marketing-block-wrapper">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 brbottom-20">
            <div className="clinic-reg clearfix">
              <span className="cyan-strip" />
              <h2 className="roboto-light">Doctors! Make it easier for patients to reach you</h2>
              <p className="roboto-light">Patients are looking at ways to connect with doctors, faster and easier. Join us and help them find you faster on GidiDoc.</p>
              <Link to="/Clinic" className="btn text-uppercase roboto-regular">Register your Clinic</Link>
            </div>
          </div>
          
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 brbottom-20">
            <div className="need-hlp clearfix help-paddding">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center zeroPadding">
                  <img src="https://static.qkdoc.com/static/pw_v3/images/need-help.png" alt="" />
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 noPaddingLeft">
                  <h3 className="roboto-regular assistance-padding">Require Assistance?</h3>
                  <h4 className="roboto-light">Call us any time!</h4>
                  <p className="roboto-medium contact-padding">Customer care &nbsp;: +2348036854942</p>
                  <p>Online Booking : +2348066861295 </p>
                  <p> Email : support@gididoc.com</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12 business-banner-wrapper">
        <div className="business-banner clearfix" style={{background: 'url("https://img.huffingtonpost.com/asset/56fd43192e00002c009501c4.jpeg?ops=scalefit_720_noupscale") no-repeat center', backgroundSize: 'cover'}}>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 business-banner--text clearfix">
          <span className="cyan-strip" />
          <h2 className="roboto-medium">How to tackle tension in children</h2>
          <p className="roboto-light">Our character is moulded from life experiences since childhood and adversities can strengthen the ch... </p>
          <a href="/articles" className="roboto-light">Read more...</a>
        </div>
      </div>
      
    </div>
  </div>
  
</section>

<div className="business-banner clearfix" style={{background: 'url("https://static.qkdoc.com/articles/articles_4_29_06_2018_182949.368323.jpg ") no-repeat center', backgroundSize: 'cover'}}>
</div>



<section className="common-wrapper content-block-wrapper">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <h3>Basic Features</h3>
      
        <ul>
          <li className="ico-header roboto-regular">
            <span className="ico1" />
            Plethora of Doctors
          </li>
          <li className="roboto-regular">Choose from among the best health professionals available in hospitals across Lagos from your mobile or desktop.</li>
          <li className="ico-header roboto-regular">
            <span className="ico2" />
            Multiple Specialisations
          </li>
          <li className="roboto-regular">Select from multiple specialisations in hospitals based on your specific requirements and book specialist doctor appointments.</li>
          <li className="ico-header roboto-regular">
            <span className="ico3" />
            Smart and Simple
          </li>
          <li className="roboto-regular">GidiDoc transforms the once- painstaking process of making appointments to nothing but a few swipes on your phone or clicks on GidiDoc website.</li>
          <li className="ico-header roboto-regular">
            <span className="ico4" />
            Smooth Synchronization
          </li>
          <li className="roboto-regular">Immediate updates on your mobile and web to doctor's availability and schedules ensures that there will be no confusion over appointment timings.</li>
          <li className="ico-header roboto-regular">
            <span className="ico5" />
            Immediate Notifications
          </li>
          <li className="roboto-regular">GidiDoc keeps you constantly updated on your appointments, so that you can always be prepared for any changes or updates from the hospital.</li>
          <li className="ico-header roboto-regular">
            <span className="ico6" />
            Location Enabled
          </li>
          <li className="roboto-regular">GidiDoc helps you find available hospitals in your proximity through location based services and remembers your doctor preferences for quick booking.</li>
        </ul>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">                            
                                     
            <div className="white-box clearfix">
              <span className="cyan-strip" />
              <span className="blue-strip" />                                
              <h1 className="roboto-light">
                Your home for health
                <span className="roboto-regular" style={{fontSize: 21}}>Booking doctor appointments has never been so easy.</span>
              </h1>
              <p className="roboto-light" style={{marginBottom: 10}}>You are a click away to your wellness.</p>
              <Link to="/Appointment/" className="book roboto-regular" style={{textDecoration: "none", color:"blue" }}><h4>BOOK APPOINTMENT</h4></Link>
            </div>
          </div>
        
          <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
          <div className="white-box clearfix" style={{paddingLeft: 25, marginBottom: 30}}>
      <h1 style={{ color: '#114dba' }}>GidiDoc.com</h1>
      <h3 className="roboto-regular">Appointment booking App</h3>
      <p className="roboto-light">Book an appointment in just a heart beat!</p>
     <Link to="https://play.google.com/store/apps" className="btn cyan-btn roboto-light">Download App</Link>
     </div>
     </div>
        </div>
      </div>
    </div>
  </div></section>
  <Footer />

</div>


 
 

    );
  }
}

export default Home;
