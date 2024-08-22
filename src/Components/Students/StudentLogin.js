import React from 'react';
import '../../Assets/Styles/StudenLogin.css';

function StudentLogin() {
  return (
    <div className='main'>
        <div className='log'>
        <h1>Student Login</h1>
        <input type='email' placeholder='Enter E-mail' id='mail'/><br/>
        <input type='password' placeholder='Enter Password' id='pass'/><br/>
        <p id='fpass'>Forget Password</p><br/>
        <button type="button" class="btn btn-success">Login</button>
        <button>Register</button>
        </div>
    </div>
  )
}

export default StudentLogin