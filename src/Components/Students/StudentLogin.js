import React from 'react';
import '../../Assets/Styles/StudenLogin.css';

function StudentLogin() {
  return (
    <div>
        <form className='log'>
        <h1>Student Login</h1>
        <p>E-mail :</p> <input type='email' placeholder='Enter E-mail'/>
        <p>Password :</p><input type='password' placeholder='Enter Password'/><br/>
        Forget Password<br/>
        <button>Login</button>
        <button>Register</button>
        </form>
    </div>
  )
}

export default StudentLogin