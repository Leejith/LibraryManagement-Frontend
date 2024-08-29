import React from 'react'
import '../../Assets/Styles/StudentReg.css'

function StudentReg() {
  return (
    <div class="register1">
        <div class="form1">
        <h1>REGISTER FORM</h1>
        <input type='text' placeholder='NAME' class='reg-name1'/>
        <input type='text' placeholder='DEPARTMENT' class='reg-dep1'/>
        <input type='number' placeholder='REGISTER NUMBER' class='reg-no1'/>
        <input type='email' placeholder='Enter E-mail' class='reg-email1'/>
        <input type='password' placeholder='Enter Password' class='reg-password1'/>
        <button type='button' class="reg-btn1">REGISTER</button>
        </div>
        <div class='image0'>
        <img src="" alt="" class="img0" /> 
        </div>
      </div>
  )
}

export default StudentReg