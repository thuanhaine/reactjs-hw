import "./Signup.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

let dataUser = {
  name: String,
  password: String,
  email: String,
};

function Signup() {
  const [inputName, setName] = useState("");
  const [inputPassword, setPassword] = useState("");
  const [inputEmail, setEmail] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    dataUser = {
      name: inputName,
      password: inputPassword,
      email: inputEmail,
    };
    console.log(dataUser);

  fetch('http://localhost:3002/api/signup', {
    method:  'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataUser)
  })
  .then(data => data.json())
  .then(data => {
    alert("Signup successful")
  })
  .catch(err => console.log(err.data))



  };

  return (
    <>
      <form onSubmit={handleSignup}>
        <div className="signup-container">
          <div className="signup-content">
            <h1 className="signup-title">Sign Up</h1>
            <div className="signup-input-form">
              <span className="signup-input-span">Username</span>
              <input
                type="text"
                className="signup-input-box"
                placeholder="Enter Username"
                value={inputName}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>

            <div className="signup-input-form">
              <span className="signup-input-span">Password</span>
              <input
              required
                type="password"
                className="signup-input-box"
                placeholder="Enter Password"
                value={inputPassword}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="signup-input-form">
              <span className="signup-input-span">Email</span>
              <input
                type="email"
                required
                className="signup-input-box"
                placeholder="Enter your email"
                value={inputEmail}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <button className="btn-signup mr-32" >
                Sign Up
            </button>
            <div className="signup__login-link">
              <span>
                You already have account{" "}
                <NavLink
                  className="NavLink__to-login"
                  to="/login"
                  onClick={this}
                >
                  <strong>login</strong>
                </NavLink>
              </span>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signup;
