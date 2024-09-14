import React from 'react';
import '../../Assets/Styles/AdminLogin.css';
import Adimg from '../../Assets/Images/adlogin.png'


function AdminLogin() {
  return (
    <section class="AdminLogin">
      <div class="container text-center ad-con">
        <div class="row">
          <div class="col-lg-5 col-md-6 col-sm-12 p-4 order-1">
            <img src={Adimg} class="img-fluid p-5 std-img"/>
          </div>
          <div class="col-lg-7 col-md-6 col-sm-12  p-0 order-sm-2">
            <form class="mt-5">
              <h1 class="mb-5 ad-h1">STUDENT LOGIN</h1>
              <div class="form-group ad-form ">
                <div class="input-group mb-3 ">
                  <span class="input-group-text std-email"><i class="ri-mail-line"></i></span>
                  <input type="text" class="form-control std-email" name="email" placeholder="EMAIL" />
                </div>
                <div class="form-group ">
                  <div class="input-group  ">
                    <span class="input-group-text std-password"><i class="ri-shield-keyhole-line"></i></span>
                    <input type="password" class="form-control std-password" name="password" placeholder="PASSWORD" />
                  </div>
                </div>
                <p class="ad-forget">forget password?</p>
              </div>
              <button type="button" class="btn ad-loginbtn">
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

export default AdminLogin  
  
    