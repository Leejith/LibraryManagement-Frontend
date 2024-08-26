import React from 'react'
import '../../Assets/Styles/StaffLogin.css'
import { Link } from 'react-router-dom'

function StaffLogin() {
  return (
    <div className='login'>
      <div className='staff'>
        <h1 >STAFF LOGIN</h1>
        <input type='email' placeholder='Enter E-mail' class='email'/>
        <input type='password' placeholder='Enter Password' class='password'/>
        <button type='button' class="button">login</button>
        <p>don't have a account ?<Link to={'/StaffRegister'} ><a href="#">Register now</a></Link></p>
         
      </div>
      <div class='image1'>
        <img src="" alt="" class="img" /> 
      </div>
    </div>
  )
}

export default StaffLogin