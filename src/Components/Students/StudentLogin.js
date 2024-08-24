import React from 'react';
import '../../Assets/Styles/StudenLogin.css';
import img from'../../Assets/Images/loginslide.jpeg'

function StudentLogin() {
  return (
    <div>
    <div class="container">
      <div class="col" id='col1'>
          <img src={img} alt='' className='img'/>
      </div>
         
      <div class="col" id='log'>
          <h1>Student Login</h1>
          <input type='email' placeholder='Enter E-mail' id='mail'/><br/>
          <input type='password' placeholder='Enter Password' id='pass'/><br/>
          <p id='fpass'>if dont have an account<a href=''>register now</a></p><br/>
          <button type="button" class="btn btn-success">Login</button>
      </div>
  </div>
  </div>

  )
}

export default StudentLogin