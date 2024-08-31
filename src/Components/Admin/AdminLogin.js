import React from 'react';
import '../../Assets/Styles/AdminLogin.css';
import img from "../../Assets/Images/loginslide.jpeg"

function AdminLogin() {
  return (
    <div class="container ad-cont">
      <div class="row g-0 ad-row">
        <div class="col-lg col1">
          <img src={img}alt="loading" class="img" /> 
        </div>
        <div class="col-lg col2">
          <h1 >ADMIN LOGIN</h1>
          <form>
            <input type='email' placeholder='Enter E-mail' class='form-control justfy-item-center ad-email'/>
            <input type='password' placeholder='Enter Password' class=' form-control ad-password'/>
            <button type='button' class="ad-button">login</button>
          </form>
           <p>don't have a account ? <a href="#">Register now</a></p>
        </div>
      </div>
    </div>  
  )
}

export default AdminLogin  
  
    