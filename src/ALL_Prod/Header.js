import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Fragment>

<nav className="navbar navbar-expand-lg navbar-light  bg-custom">
  <div className="container-fluid">
    <img  src="img/phonePe.png" className="imgP"/>

    <Link className="navbar-brand text-light" to="#"><span className="Phon">PhonePe</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/Our Solutions">Our Solutions</Link> 
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/Press" >Press</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Our Solutions">Our Solutions</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/About Us" >About Us</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Blog" >Blog</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Contact Us" >Contact Us</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link " to="/Trust & Safety">Trust & Safety</Link>
        </li>


      </ul>
      
    </div>
  </div>
</nav>

              {/* --------------------------------slider--------------------------- */}
 <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="img/hp-bannerh.webp" className="d-block w-100" alt="PhoneP"/>
      <h3 className="myHeading">FREE<br/>
      Accept Payment For your <br/>Online Business At A Zero Cost
      </h3> 
      <button type="button" className="btn"><Link to='https://business.phonepe.com/register?utm_source=homepage_banner_pg'>Get Started</Link></button>
    </div>
    <div className="carousel-item">
      <img src="img/hp-banner3.webp" className="d-block w-100" alt="PhoneP1"/>
      <h3 className="myHeading1">FREE<br/>
      Accept Payment For your <br/>Online Business At A Zero Cost
      </h3> 
      <button type="button" className="btn"><Link to='/Get Started'>Get Started</Link></button>
    </div>
    <div className="carousel-item">
      <img src="img/hp-banner5.webp" className="d-block w-100" alt="phoneP"/>
      <h3 className="myHeading1">PhoneP Pluse<br/>
      Find out how many country 140Cr! <br/>Now update with latest data for QA<br/>2024(Jav-Dec)
      </h3> 
      <button type="button" className="btn"><Link to='https://aa.phonepe.com/'>Explore Now</Link></button>
    </div>
    <div className="carousel-item">
      <img src="img/hp-banner2.webp" className="d-block w-100" alt="phoneP"/>
      <h3 className="myHeading1">FREE<br/>
      Accept Payment For your <br/>Online Business At A Zero Cost
      </h3> 
      <button type="button" className="btn"><Link to=''>Download Now</Link></button>
    </div>
  </div>
</div>
    </Fragment>

  )
}

export default Header