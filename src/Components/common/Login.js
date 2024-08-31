import React from 'react'
import '../../Assets/Styles/Login.css'
import { Link } from 'react-router-dom'
import imag from "../../Assets/Images/loginslide.jpeg"
import student from "../../Assets/Images/studentlogin.jpeg"
import teacher from "../../Assets/Images/teacherlogin.avif"
import admin from "../../Assets/Images/adminlogin.webp"

function Login() {
  return (
    <div class="login-main">
       <div class="container login-container">
            <div class="row">
                <div class="col-md ">
                  <img src={imag} class="log-image"/>
            
                </div>
                <div class="col-md login-first">
                  <h1 >LOGIN AS </h1>
                  
                  <div class="row selectlogin">
                    <div class="col-6 sel">
                      <div class="im">
                        <Link to={'/StudentLogin'}><img src={student} class="log-im " /></Link>
                        <h4>Student</h4>
                      </div>
                    </div>
                    <div class="col-6 sel">
                      <div class="im">
                        <Link to={'/StaffLogin'}><img src={teacher} class="log-im" /></Link>
                        <h4>Staff</h4>
                      </div>
                    </div>
                    <div class="col sel">
                      <div class="im">
                        <Link to={'/AdminLogin'}><img src={admin} class="log-im" /></Link>
                        <h4>Admin</h4>
                      </div>
                    </div>
                  </div>
                    
                     
                </div> 
                
            </div>

       </div>
    </div>
  )
}

export default Login

                    