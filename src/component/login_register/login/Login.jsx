import { NavLink, useHistory } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { Redirect} from 'react-router-dom'

let dataUser = {
  name: String,
  password: String,
};

function Login() {
  const [inputName, setName] = useState("");
  const [inputPassword, setPassword] = useState("");
    const history = useHistory();
  const handleLogin = (e) => {
    e.preventDefault();
    dataUser = {
      name: inputName,
      password: inputPassword,
    };
    console.log(dataUser);

    fetch("https://resfulapitest.herokuapp.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUser),
    })
      .then((data) => data.json())
      .then((data) => {
        if(data.status === 200){
            alert("SuccessLogin")
            history.replace('/')
    }
        else alert("sai")
      })
      .catch((err) => console.log(err.data));
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="login-container">
          <div className="login-content">
            <h1 className="login-title">Login</h1>
            <div className="login-input-form">
              <span className="login-input-span">Username</span>
              <input
                type="text"
                className="login-input-box"
                placeholder="Nhap username"
                onChange={e => setName(e.target.value)}
              ></input>
            </div>
            <div className="login-input-form">
              <span className="login-input-span">Password</span>
              <input
                type="password"
                className="login-input-box"
                placeholder="Nhap Password"
                onChange={ e => setPassword(e.target.value)}
              ></input>
            </div>
            <button className="btn-login">Login</button>
            <div className="text__forgot mr-16">
              <span>Forgot Password ?</span>
            </div>
            <div className="login__register-link mr-16">
              <span className="">
                Don't have account ? click{" "}
                <NavLink className="navLink" to="/signup" onClick={this}>
                  <strong>Here</strong>
                </NavLink>
              </span>
            </div>
            <div className="login__more">
              <span className="login__more-text">Login More</span>
              <div className="login__more-icon ">
                <i class="fa fa-google google"></i>
                <i class="fa fa-facebook facebook"></i>
                <i class="fa fa-twitter twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
