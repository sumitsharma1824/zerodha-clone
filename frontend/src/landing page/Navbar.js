import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg border-bottom bg-light sticky-top ">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                    <img style={{width:"30%"}} src='media/logo.svg'/>
                    </Link >
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/SignUp">Sign up</Link >
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/about">About</Link >
                        </li>
                         <li class="nav-item">
                            <Link class="nav-link active" to="/product">Product</Link >
                        </li>
                         <li class="nav-item">
                            <Link class="nav-link active" to="/pricing">Pricing</Link >
                        </li>
                         <li class="nav-item">
                            <Link class="nav-link active" to="/support">Support</Link >
                        </li>
                        
                        
                    </ul>
                    
                </div>
              </div>
        </nav>
    );
}

export default Navbar;