import React from 'react'
import '../../Assets/Styles/Navbar.css'
import logo from '../../Assets/Images/logo192.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg fixed-top ">
          <div class="container-fluid">
            <img src={logo} alt="" height="40px" width="40px"/>
            <a class="navbar-brand me-auto" href="#">bookworld</a>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">bookworld</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
                  <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                        <li class="nav-item">
                          <Link to={'/login'} class="nav-link active mx-lg-2" aria-current="page">HOME</Link>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link active mx-lg-2" href="#">contact us</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link active mx-lg-2" href="#">help</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link active mx-lg-2" href="#">books</a>
                        </li>
                    </ul>
                  </div>
            </div>
            <a href='#' class="login-button">login</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
    </div>
  )
}

export default Navbar