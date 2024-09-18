import React, { useState } from 'react'
import '../../Assets/Styles/AdminRegister.css'
import profileimg from '../../Assets/Images/profile.png'
import adreg from '../../Assets/Images/adreg.png'
function AdminRegister() {

  const [Profile,setProfile]=useState()

  const profileChange=(upload)=>{
    const file = upload.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload =()=>{
        setProfile(reader.result);

      }
      reader.readAsDataURL(file);
    }


  }

  return (
    <section class="Adminregister">
    <div class="container text-center ad-reg ">
        <div class="row">
          <div class="col-lg-5 col-md-6 col-sm-12 order-1 m-auto">
          <img src={adreg} class="img-fluid p-5"/>
          </div>
          <div class="col-lg-7 col-md-6 col-sm-12 order-sm-2 ">
            <form class="ad-form ">
              <h1 class="mt-4">REGISTER FORM</h1>

            {/* profile card           */}
            <div class="mb-2 text-center  profile-pic d-flex justfy-content-center">
                        <img  src={Profile  || profileimg}  class="" for="upload-pic"/>
                        <label class="upload-photo " for="upload-pic">profile</label>
                        <input type="file" id="upload-pic" accept="image/*" class="form-control" onChange={profileChange}/>
                       
                    </div>
              {/* input field */}
              <div class="form-group ad-form">
              <div class="input-group ">
                <span class="input-group-text reg-adname"><i class="ri-user-fill"></i></span>
                <input type="text" class="form-control reg-adname" name="Name"placeholder="Enter your Name" />
              </div>
            </div>
              
            <div class="form-group ad-form ">
              <div class="input-group ">
                <span class="input-group-text reg-adno"><i class="ri-registered-line"></i></span>
                <input type="number" class="form-control reg-adno" name="Regno"placeholder="Register number" />
              </div>
            </div>
              <div class="form-group ad-form ">
              <div class="input-group ">
                <span class="input-group-text reg-ademail"><i class="ri-mail-line"></i></span>
                <input type="email" class="form-control reg-ademail" name="email"placeholder="Enter your mail" />
              </div>
            </div>
              <div class="form-group ad-form ">
              <div class="input-group ">
                <span class="input-group-text reg-adpass"><i class="ri-lock-password-line"></i></span>
                <input type="password" class="form-control reg-adpass" name="password"placeholder="password***" />
              </div>
            </div>
            <button type='button' class="btn reg-adbtn ">REGISTER</button>
            </form>
          </div>
        </div>
    </div>
  

</section>
)

}

export default AdminRegister