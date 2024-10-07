import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../../Assets/Styles/Reset.css'

function Reset() {
    const location = useLocation();
    const navigate = useNavigate();
  
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const role = location.state?.role;
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (password === confirmPassword) {
        console.log("Password reset for: ", location.state.email);
        if(role==="staff"){
          navigate('/StaffLogin');
        }
        else if(role==="student"){
          navigate('/StudentLogin');
        }
        else if(role==="admin"){
          navigate('/Adminlogin')
        }
      } else {
        setError("Passwords do not match.");
      }
    };
  return (
    <section class="reset">
      <div class="container text-center reset-con">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-8 col-sm-12 p-4">
            <form class="mt-5" onSubmit={handleSubmit}>
              <h1 class="mb-4 reset-h1">RESET PASSWORD</h1>
              <p class="mb-4">
                Reset password for: <strong>{location.state.email}</strong>
              </p>

              {/*error message */}
              {error && <div class="alert alert-danger">{error}</div>}

              <div class="form-group reset-form">
                <div class="input-group mb-3">
                  <span class="input-group-text reset-password">
                    <i class="ri-lock-password-line"></i>
                  </span>
                  <input
                    type="password"
                    class="form-control reset-password"
                    name="password"
                    placeholder="NEW PASSWORD"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div class="form-group ad-form">
                <div class="input-group mb-3">
                  <span class="input-group-text reset-password">
                    <i class="ri-lock-password-line"></i>
                  </span>
                  <input
                    type="password"
                    class="form-control reset-password"
                    name="confirmPassword"
                    placeholder="CONFIRM PASSWORD"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" class="btn reset-loginbtn" onClick={handleSubmit}>
                <i className="ri-check-line"></i> Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reset