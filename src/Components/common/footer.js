import React from 'react'
import '../../Assets/Styles/Footer.css'
import logo from "../../Assets/Images/logo.png";
import 'remixicon/fonts/remixicon.css'

function Footer() {
  return (
    <div class="container-fluid footer page-wrapper">
      <div class="row ">
        <div class="col-lg-4  p-5 col-md-6 m-auto">
        <img class="fo-logo"src={logo} alt="" />
          <p class="font-book">
            BOOKWORLD
          </p>
        </div>
        <div class="col-lg-4 p-5 col-md-6 m-auto">
        <ul>
            
          <p>aboutus</p>
          <p>contact us</p>
          <p>books</p>
          
         </ul>
        </div>
        <div class="col-lg-4 p-5 col-md-6 icon ">
          <p>contactus</p>
          <i class="ri-twitter-x-line icon-foter"></i>
          <i class="ri-facebook-box-fill icon-foter"></i>
          <i class="ri-whatsapp-fill icon-foter"></i>
        </div>
      </div>
    </div>
    
  )
}

export default Footer