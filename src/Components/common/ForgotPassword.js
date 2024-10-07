import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../Assets/Styles/Forgetpassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const resetemail =(resetemail)=>{
    setEmail(resetemail.target.value)
  }

  const navigate = useNavigate();
  const location =useLocation()

  const role = location.state?.role ||"default";

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/otp", {state:{ email,role}});
    console.log("email :", email,"role:",role);
  };

  return (
    <section class="ForgotPassword ">
      <div class="container text-center forgot-con">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-8 col-sm-12 p-4">
            <form class="mt-5" onSubmit={handleSubmit}>
              <h1 class="mb-4 forgot-h1">FORGOT PASSWORD</h1>
              <p class="mb-4">
                Enter your email to receive a password reset.
              </p>
              <div class="form-group forgot-form">
                <div class="input-group mb-3">
                  <span class="input-group-text forgot-email">
                    <i class="ri-mail-line"></i>
                  </span>
                  <input
                    type="email"
                    class="form-control forgot-email"
                    name="email"
                    placeholder="EMAIL"
                    value={email}
                    onChange={resetemail}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn forgot-loginbtn">
                <i className="ri-mail-send-line"></i> reset
              </button>
              <p className="mt-3">
                Remember your password? <Link to="/AdminLogin">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
