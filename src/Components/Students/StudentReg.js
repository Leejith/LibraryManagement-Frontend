import React, { useState } from "react";
import "../../Assets/Styles/Register.css";
import profileimg from "../../Assets/Images/profile.png";
import stdimg from "../../Assets/Images/stdreg.png";

function StudentReg() {
  const [StudentRegister, setStudentRegister] = useState({Name:'',Department:'',regno:"",email:"",password:""});
  const [Profile, setProfile] = useState();

  const reg=(register)=>{
    setStudentRegister({...StudentRegister,[register.target.name]:register.target.value})
  }
 

  const profileChange = (upload) => {
    const file = upload.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(StudentRegister)
  };
  
  

  return (
    <section class="register">
      <div class="container text-center reg-contain ">
        <div class="row">
          <div class="col-lg-5 col-md-6 col-sm-12 order-1 m-auto">
            <img src={stdimg} class="img-fluid p-5" />
          </div>
          <div class="col-lg-7 col-md-6 col-sm-12 order-sm-2 ">
            <form class="reg-form" onSubmit={handleSubmit}>
              <h1 class="mt-4">REGISTER FORM</h1>

              {/* profile card           */}
              <div class="mb-2">
                <label  for="upload-pic">
                <img src={Profile || profileimg} class="rounded-circle profile-pic"/>
                </label>
                <input
                  type="file"
                  id="upload-pic"
                  accept="image/*"
                  class="form-control"
                  onChange={profileChange}
                />
              </div>
            
              {/* input field */}
              <div class="form-group reg-form">
                <div class="input-group ">
                  <span class="input-group-text reg-inputform">
                    <i class="ri-user-fill"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control reg-inputform"
                    name="Name"
                    placeholder="Enter your Name"
                    required
                    onChange={reg}
                  />
                </div>
              </div>
              <div class="form-group reg-form ">
                <div class="input-group ">
                  <span class="input-group-text reg-inputform">
                    <i class="ri-id-card-line"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control reg-inputform"
                    name="Department"
                    placeholder="Department"
                    required
                    onChange={reg}
                  />
                </div>
              </div>
              <div class="form-group reg-form ">
                <div class="input-group ">
                  <span class="input-group-text reg-inputform">
                    <i class="ri-registered-line"></i>
                  </span>
                  <input
                    type="number"
                    class="form-control reg-inputform"
                    name="Regno"
                    placeholder="Register number"
                    required
                    onChange={reg}
                  />
                </div>
              </div>
              <div class="form-group reg-form ">
                <div class="input-group ">
                  <span class="input-group-text reg-inputform">
                    <i class="ri-mail-line"></i>
                  </span>
                  <input
                    type="email"
                    class="form-control reg-inputform"
                    name="email"
                    placeholder="Enter your mail"
                    required
                    onChange={reg}
                  />
                </div>
              </div>
              <div class="form-group reg-form ">
                <div class="input-group ">
                  <span class="input-group-text reg-inputform">
                    <i class="ri-lock-password-line"></i>
                  </span>
                  <input
                    type="password"
                    class="form-control reg-inputform"
                    name="password"
                    placeholder="password***"
                    required
                    onChange={reg}
                  />
                </div>
              </div>
              <button type="submit" class="btn reg-formbtn ">
                REGISTER
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentReg;
