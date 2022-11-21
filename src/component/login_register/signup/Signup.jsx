import "./Signup.css";
import { NavLink, useNavigate} from "react-router-dom";
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

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    dataUser = {
      name: inputName,
      password: inputPassword,
      email: inputEmail,
    };
    console.log(dataUser);

  fetch('https://resfulapitest.herokuapp.com/api/signup', {
    method:  'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataUser)
  })
  .then(data => data.json())
  .then(data => {
    if(data.status === 200 )
      {
        alert("Success")
        navigate("/login", { replace: true });

      }
    
    else {
      if(data.status === 401 )
      {
        alert("Username đã tồn tại")
      }
    
      if(data.status === 402 )
      {
        alert("Email đã tồn tại")
      }
    }
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
            <button className="btn-signup" >
                Sign Up
            </button>
            <div className="signup__have-account">
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
