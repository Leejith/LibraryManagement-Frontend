import React, { useState } from 'react';
import '../../Assets/Styles/StudenLogin.css';
import img from'../../Assets/Images/stdlogin.png'
import { Link } from 'react-router-dom';

function StudentLogin() {
  const [Student,setStudent]=useState({email:'',password:''},);

  const login =(login)=>{
    setStudent({...Student,[login.target.name]:login.target.value});

  }
  console.log(Student)

  return (
    <section class="StudentLogin">
      <div class="container text-center std-con">
        <div class="row">
          <div class="col-lg-5 col-md-6 col-sm-12 p-4 order-1 m-auto">
            <img src={img} class="img-fluid p-3 "/>
          </div>
          <div class="col-lg-7 col-md-6 col-sm-12  p-0 order-sm-2">
            <form class="mt-5">
              <h1 class="mb-5 std-h1">STUDENT LOGIN</h1>
              <div class="form-group std-form ">
                <div class="input-group mb-3 ">
                  <span class="input-group-text std-email"><i class="ri-mail-line"></i></span>
                  <input type="text" class="form-control std-email" name="email" onChange={login} placeholder="EMAIL" required />
                </div>
                <div class="form-group ">
                  <div class="input-group  ">
                    <span class="input-group-text std-password"><i class="ri-shield-keyhole-line"></i></span>
                    <input type="password" class="form-control std-password" name="password" onChange={login}placeholder="PASSWORD" required />
                  </div>
                </div>
                <p class="std-forget">forget password?</p>
              </div>
              <button type="submit" class="btn std-loginbtn">
                <i class="ri-lock-unlock-line"></i>
                LOGIN
              </button>
              <p >don't have a account ? <Link to={'/studentregister'}>Register now </Link></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentLogin