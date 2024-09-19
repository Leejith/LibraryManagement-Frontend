import React, { useState } from 'react'
import '../../Assets/Styles/StaffRegister.css'
import stfreg from '../../Assets/Images/stfreg.png'
import profileimg from '../../Assets/Images/profile.png'

function StaffRegister() {

  const [Profile,setProfile]=useState()

  const profileChange=(upload)=>{
    const file = upload.target.files[0];
    if(file){
      const reader = new FileReader();
      console.log(reader);
      
      reader.onload =()=>{
        setProfile(reader.result);

      }
      reader.readAsDataURL(file);
    }


  }

  return (
    <section class="Staffregister">
        <div class="container text-center stf-reg">
            <div class="row">
              <div class="col-lg-5 col-md-6 col-sm-12 order-1 m-auto">
              <img src={stfreg} class="img-fluid p-5"/>
              </div>
              <div class="col-lg-7 col-md-6 col-sm-12 order-sm-2">
                <form class="stf-form">
                  <h1 class="mt-4">REGISTER FORM</h1>

                {/* profile card           */}
                <div class="mb-2 text-center  profile-pic d-flex justfy-content-center">
                            <img  src={Profile  || profileimg}  class="" />
                            <label class="upload-photo " for="upload-pic">profile</label>
                            <input type="file" id="upload-pic" accept="image/*" class="form-control" required onChange={profileChange}/>
                           
                        </div>
                  {/* input field */}
                  <div class="form-group stf-form">
                  <div class="input-group ">
                    <span class="input-group-text reg-stfname"><i class="ri-user-fill"></i></span>
                    <input type="text" class="form-control reg-stfname" name="Name"placeholder="Enter your Name" required />
                  </div>
                </div>
                  <div class="form-group stf-form ">
                  <div class="input-group ">
                    <span class="input-group-text reg-stfdep"><i class="ri-id-card-line"></i></span>
                    <input type="text" class="form-control reg-stfdep" name="Department"placeholder="Department"required />
                  </div>
                </div>
                  <div class="form-group stf-form ">
                  <div class="input-group ">
                    <span class="input-group-text reg-stfno"><i class="ri-profile-line"></i></span>
                    <input type="number" class="form-control reg-stfno" name="IDno"placeholder="ID Number" required />
                  </div>
                </div>
                  <div class="form-group stf-form ">
                  <div class="input-group ">
                    <span class="input-group-text reg-stfemail"><i class="ri-mail-line"></i></span>
                    <input type="email" class="form-control reg-stfemail" name="email"placeholder="Enter your mail" required/>
                  </div>
                </div>
                  <div class="form-group stf-form ">
                  <div class="input-group ">
                    <span class="input-group-text reg-stfpass"><i class="ri-lock-password-line"></i></span>
                    <input type="password" class="form-control reg-stfpass" name="password"placeholder="password***" required />
                  </div>
                </div>
                <button type='submit' class="btn reg-stfbtn ">REGISTER</button>
                </form>
              </div>
            </div>
        </div>
      

    </section>
  )
}

export default StaffRegister
