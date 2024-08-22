import React from 'react';
import '../../Assets/Styles/StudenLogin.css';

function StudentLogin() {
  return (
    <div className='main'>
        <div className='log'>
        <form >
        <h1>Student Login</h1>
        <input type='email' placeholder='Enter E-mail' id='mail'/><br/>
        <input type='password' placeholder='Enter Password' id='pass'/><br/>
        <p id='fpass'>Forget Password</p><br/>
        <button>Login</button>
        <button>Register</button>
        </form>
        </div>
    </div>
  )
}

export default StudentLogin