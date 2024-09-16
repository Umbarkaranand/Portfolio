
import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';


 const Nvabar = () => {

    
   
  return (
    <div>
     <nav className="shadow rounded navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand portstyle" to="/">Portfolio</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/skill">Skill</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/project">Project</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/certification">Certification</Link>
                    </li>

                    

                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
                
                </div>
            </div>
        </nav> 


       

        
    </div>
  );
};

export default Nvabar;
