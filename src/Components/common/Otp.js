import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../Assets/Styles/Otp.css";

function Otp() {
  const location = useLocation(); // To get email from the ForgotPassword component
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    if (otp === "123456") { 
      navigate("/reset-password", { state: { email: location.state.email ,role:location.state?.role } });
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <section class="OTP">
      <div class="container text-center otp-con">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-8 col-sm-12 p-4">
            <form class="mt-5" onSubmit={handleSubmit}>
              <h1 class="mb-4 otp-h1">OTP VERIFICATION</h1>
              <p class="mb-4">
                Enter the OTP sent to your email: <strong>{location.state.email}</strong>
              </p>

              {/* error message */}
              {error && <div class="alert alert-danger">{error}</div>}

              <div class="form-group otp-form">
                <div class="input-group mb-3">
                  <span class="input-group-text otp-email">
                    <i class="ri-lock-line"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control otp-email"
                    name="otp"
                    placeholder="ENTER OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" class="btn otp-loginbtn">
                <i class="ri-check-line"></i> Verify OTP
              </button>

              <p class="mt-3">
                Didn't receive OTP? <a href="#">Resend OTP</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Otp;
