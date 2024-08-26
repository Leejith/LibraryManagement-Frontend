import React from 'react'
import '../../Assets/Styles/Navbar.css'
import logo from '../../Assets/Images/logo192.png'

function Navbar() {
  return (
    <div>
        <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand nav-logo" href="#">
            <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top "/>
              BOOKWORLD
          </a>
        </div>
        </nav>
    </div>
  )
}

export default Navbar