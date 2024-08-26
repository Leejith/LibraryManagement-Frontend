import React from 'react';
import '../../Assets/Styles/AdminLogin.css';
import img from "../../Assets/Images/loginslide.jpeg"

function AdminLogin() {
  return (
    <div class="container ad-cont">
      <div class="row">
        <div class="col-md col1">
          <img src={img}alt="loading" class="img" /> 
        </div>
        <div class="col-md col2">
          <h1 >ADMIN LOGIN</h1>
          <input type='email' placeholder='Enter E-mail' class='ad-email'/>
          <input type='password' placeholder='Enter Password' class='ad-password'/>
          <button type='button' class="ad-button">login</button>
          <p>don't have a account ? <a href="#">Register now</a></p>
        </div>
      </div>
    </div>
  
    
  )
}

export default AdminLogin  
  
    