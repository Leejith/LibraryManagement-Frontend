import React, { useState } from 'react';
import '../../Assets/Styles/StudenLogin.css';
import img from'../../Assets/Images/loginslide.jpeg'

function StudentLogin() {
  return (
    <div>
        <div class="login-box">
          {/* <div class="row"> */}
            <div class="col box1">
              <img src={img} alt=''/>
            </div>
            <div class="col box2">
              <h1>Welcome Back</h1>
              <input type='email' placeholder='enter E-mail' className='st-log-mail'/>
              <input type='password' placeholder='enter password' className='st-log-pass'/>
              <button>Login</button>
              <p>don't have an account<a href=''>Register Now</a></p>
            </div>
          </div>
        </div>
    // </div>
  )
}

export default StudentLogin