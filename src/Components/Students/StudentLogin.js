import React, { useState } from 'react';
import '../../Assets/Styles/StudenLogin.css';
import img from'../../Assets/Images/loginslide.jpeg'

function StudentLogin() {
    const[state,setstate]=useState(true)
    const register=()=>{
      setstate(false)
    }

    const login=()=>{
      setstate(true)
    }

  if(state==true)
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

  else
  return(

    <div class="container container2">
      <div class="col col3">
      <h1>REGISTER FORM</h1>
        <input type='text' placeholder='NAME' class='reg-name'/>
        <input type='text' placeholder='DEPARTMENT' class='reg-dep'/>
        <input type='number' placeholder='REGISTER NUMBER' class='reg-no'/>
        <input type='email' placeholder='Enter E-mail' class='reg-email'/>
        <input type='password' placeholder='Enter Password' class='reg-password'/>
        <button type='button' class="reg-btn">REGISTER</button>
        <p id='fpass'>if already have an account?<button type="button" class="btn btn-success" onClick={login}>Login</button></p><br/>
      </div>
      <div class="col col4">
        <div class='image'>
        <img src="" alt="" class="img" /> 
      </div>
    </div>
    </div>
  
  )
}

export default StudentLogin