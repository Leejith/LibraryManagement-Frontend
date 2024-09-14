import React from 'react'
import '../../Assets/Styles/Login.css'
import { Link } from 'react-router-dom'
import mainlogin from '../../Assets/Images/mainlogin.png'



function Login() {
  return (
    <section class="Login-main">
        <div class="container login-con">
          <div class="row">
            <div class="col">
            <img src={mainlogin} class="img-fluid p-5 mainlogin-img "/>
            </div>
            <div class="col">
            Column
            </div>
    
          </div>
        </div>
    </section>
  )
}

export default Login

                    