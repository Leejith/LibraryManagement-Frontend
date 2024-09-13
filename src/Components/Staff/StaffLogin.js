import React from 'react'
import '../../Assets/Styles/StaffLogin.css'
import { Link } from 'react-router-dom'
import stfimg from '../../Assets/Images/stfimg.png' 



function StaffLogin() {
  return (
    <section class="StaffLogin">
      <div class="container text-center stf-con">
        <div class="row">
          <div class="col-lg-5 col-md-6 p-0 col-sm-12 order-1">
            <img src={stfimg} class="img-fluid p-5 "/>
          </div>
          <div class="col-lg-7 col-md-6 col-sm-12  p-0 order-sm-2">
            <form class="mt-5 p-4">
              <h1 class="mb-5 stf-h1">STAFF LOGIN</h1>
              <div class="form-group stf-form ">
                <div class="input-group mb-3 ">
                  <span class="input-group-text stf-email"><i class="ri-mail-line"></i></span>
                  <input type="text" class="form-control stf-email" name="email"placeholder="EMAIL" />
                </div>
                <div class="form-group ">
                  <div class="input-group  ">
                    <span class="input-group-text stf-password"><i class="ri-shield-keyhole-line"></i></span>
                    <input type="password" class="form-control stf-password" name="password"placeholder="PASSWORD" />
                  </div>
                </div>
                <p class="stf-forget">forget password?</p>
              </div>
              <button type="button" class="btn stf-loginbtn ">
                <i class="ri-lock-unlock-line"></i>
                LOGIN
              </button>
              <p >don't have a account ? <a href="#">Register now</a></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StaffLogin