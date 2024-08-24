import React from 'react';
import '../../Assets/Styles/AdminLogin.css';
import img from "../../Assets/Images/imageslide2.jpg"

function AdminLogin() {
  return (
      <div class="container">
        <div class="col col1">
          <img src={img}alt="" class="img" /> 
        </div>
        <div class="col col2">
          <h1 >STAFF LOGIN</h1>
          <input type='email' placeholder='Enter E-mail' class='ad-email'/>
          <input type='password' placeholder='Enter Password' class='ad-password'/>
          <button type='button' class="ad-button">login</button>
          <p>don't have a account ? <a href="#">Register now</a></p>
        </div>
        
  
      </div>
  
    
  )
}

export default AdminLogin