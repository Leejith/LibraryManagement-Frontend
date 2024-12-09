import React, { useEffect } from "react";
import "../../Assets/Styles/Landing.css";
import logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";
import home from "../../Assets/Images/home.png";

function Landing() {
  useEffect(() => {
    // Add animation to the navbar on page load
    const navbar = document.querySelector(".navbar");
    navbar.classList.add("slide-down");
  }, []);

  return (
    <div class="LandingPage">
      {/* Navbar */}
      <div>
        <nav class="navbar navbar-expand-lg fixed-top lan-nav ">
          <div class="container-fluid">
            <img class="logo " src={logo} alt="" />
            <p class="  lan-book">BOOKWORLD</p>
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
                <h5 class="offcanvas-title lan-h5">BOOKWORLD</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body lan-body">
                <ul class="navbar-nav justify-content-center flex-grow-1 pe-2 list-item">
                  <li class="nav-item list">
                    <Link to={""} class="nav-link active mx-lg-2">
                      HOME
                    </Link>
                  </li>
                  <li class="nav-item list">
                    <a class="nav-link lan-link active mx-lg-2" href="">
                      ABOUT US
                    </a>
                  </li>
                  <li class="nav-item list">
                    <a class="nav-link active mx-lg-2" href="">
                      BOOKS
                    </a>
                  </li>
                </ul>
                <Link to="">
                  <a href="#" class="btn login-reg ">
                    Login / Register
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Landing page */}

      <section class="home">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-7 col-md-7 col-12 py-lg-5 p-5 order-1">
              <h1 class="display-1 anime ">BOOKWORLD</h1>
              <p class="my-lg-5 my-sm-3 anime">
                Reading gives us someplace to go when we have to stay where we
                are, as turning pages and discovering new worlds allow us to get
                lost in the story and find ourselves within it
              </p>
              <div class="input-group m-2">
                <Link to={"/book"}>
                  <button class="btn ex-more anime anime-btn">
                    explore more
                  </button>
                </Link>
              </div>
            </div>
            <div class="col-lg-5 col-md-5 col-12 my-sm-1   order-sm-2">
              <img src={home} class="img-fluid " />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
