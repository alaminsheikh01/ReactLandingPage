import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './Navbar.css';
import RightSideImag from '../imges/sidePic.png'





const Navbar = () => {
    return (
        <>

        <div  className="container-fluid">

            <div id="header" className="container cus_container">


                <nav className="navbar navbar-expand-lg navbar-light">
                    <NavLink className="navbar-brand" to="/">LOGO HERE</NavLink>
                    <button className="navbar-toggler" type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">

                        <li class="nav-item main_nav">
                        <NavLink exact activeClassName="nav-link" 
                        className="nav-link" to="/Service">Services</NavLink>
                         </li>
                            <li className="nav-item main_nav">
                                <a className="nav-link" href="#">Solutions</a>
                            </li>

                            <li className="nav-item main_nav">
                                <a className="nav-link" href="#">Space</a>
                            </li>

                            <li className="nav-item main_nav">
                                <a className="nav-link" href="#">Teams</a>
                            </li>

                            <li className="nav-item main_nav">
                                <a className="nav-link" href="#">About Us</a>
                            </li>

                        </ul>

                    </div>

                </nav>
                <div className="banner-content">
                    <h1>Pure Code Power for <br></br>best business solutions</h1>
                </div>
                <img src={RightSideImag} className="feature-img d-none d-xl-block d-lg-block"></img>

           
            </div>
            

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path className="waves" fill="#a2d9ff" fill-opacity="1" d="M0,0L40,32C80,64,160,128,240,160C320,192,400,192,480,
                181.3C560,171,640,149,720,165.3C800,181,880,235,960,224C1040,213,1120,139,1200,90.7C1280,
                43,1360,21,1400,10.7L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,
                320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,
                40,320L0,320Z"></path>
                </svg>
                
            </div>

        </>
    );
}

export default Navbar;