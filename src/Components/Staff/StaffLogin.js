import React from 'react'
import '../../Assets/Styles/StaffLogin.css'
import { Link } from 'react-router-dom'
import staffloginimg from '../../Assets/Images/loginslide.jpeg'

function StaffLogin() {
  return (
    <div class="container staff-main ">
      <div class="row staff-row">
        <div class="col-md-6 g-0 ">
          <div class="staff-img">
            <img src={staffloginimg} class="img-fluid" />
          </div>
        </div>
        <div class="col-md-6 staff-right">
          <div class="staff-login ">
            <div class="sl-header ">
            <h2>staff login</h2>
            </div>
            
            <div class="sl.input">
              <input type="email" class="form-control sl-email "  placeholder="email"/>
              <input type="password" class="form-control sl-password "  placeholder="pasword"/>
              <button type='button' class="sl-button">login</button>
            </div>
          </div>

       </div>
      </div>

    </div>
  )
}

export default StaffLogin