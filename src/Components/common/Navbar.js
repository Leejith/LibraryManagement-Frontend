import React from "react";
import "../../Assets/Styles/Navbar.css";
import logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg fixed-top ">
        <div class="container-fluid">
          <img class="logo "src={logo} alt="" />
          <p class="  font-book">
            BOOKWORLD
          </p>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" >
                BOOKWORLD
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-center flex-grow-1 pe-2 list-item">
                <li class="nav-item list">
                  <Link to={"/nav"} class="nav-link active mx-lg-2">
                    HOME
                  </Link>
                </li>
                <li class="nav-item list">
                  <a class="nav-link active mx-lg-2" href="#About">
                    ABOUT US
                  </a>
                </li>
                <li class="nav-item list">
                  <a class="nav-link active mx-lg-2" href="book-con">
                    BOOKS
                  </a>
                </li>
                
              </ul>
              <a href="#" class="btn login-button ">login</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
