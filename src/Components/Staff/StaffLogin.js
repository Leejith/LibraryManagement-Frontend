import React from 'react'
import '../../Assets/Styles/StaffLogin.css'

function StaffLogin() {
  return (
    <div>StaffLogin
    <form className=''>
        <h1>Staff Login</h1>
        <input type='email' placeholder='Enter E-mail'/>
        <input type='password' placeholder='Enter Password'/><br/>
        Forget Password<br/>
        <button>Login</button>
        <button>Register</button>
      </form>
    </div>
  )
}

export default StaffLogin