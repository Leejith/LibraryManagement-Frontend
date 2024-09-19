import React, { useState } from 'react'
import '../../Assets/Styles/StudentReg.css'
import profileimg from '../../Assets/Images/profile.png'
import stdimg from '../../Assets/Images/stdreg.png'



function StudentReg() {

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
    <section class="Studentregister">
        <div class="container text-center std-reg ">
            <div class="row">
              <div class="col-lg-5 col-md-6 col-sm-12 order-1 m-auto">
              <img src={stdimg} class="img-fluid p-5"/>
              </div>
              <div class="col-lg-7 col-md-6 col-sm-12 order-sm-2 ">
                <form class="std-form ">
                  <h1 class="mt-4">REGISTER FORM</h1>

                {/* profile card           */}
                <div class="mb-2 text-center  profile-pic d-flex justfy-content-center">
                            <img  src={Profile  || profileimg}  class=""/>
                            <label class="upload-photo " for="upload-pic">profile</label>
                            <input type="file" id="upload-pic" accept="image/*" class="form-control" onChange={profileChange}/>
                           
                        </div>
                  {/* input field */}
                  <div class="form-group std-form">
                  <div class="input-group ">
                    <span class="input-group-text reg-stdname"><i class="ri-user-fill"></i></span>
                    <input type="text" class="form-control reg-stdname" name="Name"placeholder="Enter your Name" required />
                  </div>
                </div>
                  <div class="form-group std-form ">
                  <div class="input-group ">
                    <span class="input-group-text reg-stddep"><i class="ri-id-card-line"></i></span>
                    <input type="text" class="form-control reg-stddep" name="Department"placeholder="Department" required />
                  </div>
                </div>
                  <div class="form-group std-form ">
                  <div class="input-group ">
                    <span class="input-group-text reg-stdno"><i class="ri-registered-line"></i></span>
                    <input type="number" class="form-control reg-stdno" name="Regno"placeholder="Register number" required />
                  </div>
                </div>
                  <div class="form-group std-form ">
                  <div class="input-group ">
                    <span class="input-group-text reg-stdemail"><i class="ri-mail-line"></i></span>
                    <input type="email" class="form-control reg-stdemail" name="email"placeholder="Enter your mail" required />
                  </div>
                </div>
                  <div class="form-group std-form ">
                  <div class="input-group ">
                    <span class="input-group-text reg-stdpass"><i class="ri-lock-password-line"></i></span>
                    <input type="password" class="form-control reg-stdpass" name="password"placeholder="password***" required  />
                  </div>
                </div>
                <button type='submit' class="btn reg-stdbtn ">REGISTER</button>
                </form>
              </div>
            </div>
        </div>
      

    </section>
  )
}

export default StudentReg