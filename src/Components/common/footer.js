import React from 'react'
import '../../Assets/Styles/Footer.css'
import logo from "../../Assets/Images/logo.png";
import 'remixicon/fonts/remixicon.css'

function Footer() {
  return (
    <div class="container-fluid footer">
      <div class="row ">
        <div class="col-lg-4  p-5 col-md-6 ">
        <img class="fo-logo"src={logo} alt="" />
          <p class="font-book">
            BOOKWORLD
          </p>
        </div>
        <div class="col-lg-4 p-5 col-md-6">
        <ul>
            
            <p>aboutus</p>
            <p>contact us</p>
            <p>books</p>
          
         </ul>
        </div>
        <div class="col-lg-4 p-5 col-md-6">
           <p>contactus</p>
           <i class="ri-twitter-x-line"></i>
        </div>
      </div>
    </div>
    
  )
}

export default Footer