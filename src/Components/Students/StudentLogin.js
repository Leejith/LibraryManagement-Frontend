import React, { useState } from 'react';
import '../../Assets/Styles/StudenLogin.css';
import img from'../../Assets/Images/loginslide.jpeg'

function StudentLogin() {
  return (
    <div>
    <div class="container container1">

      <div class="col" id='col1'>
          <img src={img} alt='' className='img'/>
      </div>
         
      <div class="col" id='log'>
          <h1>Student Login</h1>
          <input type='email' placeholder='Enter E-mail' id='mail'/><br/>
          <input type='password' placeholder='Enter Password' id='pass'/><br/>
          <button type="button" class="btn btn-success">Login</button>
          <p id='fpass'>if dont have an account<button type='button' class="reg-btn1" onClick={register}>REGISTER</button></p><br/>
          
      </div>
      </div>
    </div>

  )
}

export default StudentLogin