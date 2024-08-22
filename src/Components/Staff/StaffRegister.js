import React from 'react'
import '../../Assets/Styles/StaffRegister.css'

function StaffRegister() {
  return (
    <div class="register">
        <div class="form">
        <h1>REGISTER FORM</h1>
        <input type='text' placeholder='NAME' class='reg-name'/>
        <input type='text' placeholder='DEPARTMENT' class='reg-dep'/>
        <input type='number' placeholder='REGISTER NUMBER' class='reg-no'/>
        <input type='email' placeholder='Enter E-mail' class='reg-email'/>
        <input type='password' placeholder='Enter Password' class='reg-password'/>
        <button type='button' class="reg-btn">REGISTER</button>
        </div>
        <div class='image'>
        <img src="" alt="" class="img" /> 
        </div>
      

    </div>
  )
}

export default StaffRegister