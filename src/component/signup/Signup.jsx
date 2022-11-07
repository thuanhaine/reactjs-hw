import './Signup.css';
import { NavLink } from 'react-router-dom';





function signup() {
    return (
        <>
            <div className="signup-container">
                <div className="signup-content">
                    <h1 className='signup-title'>Sign Up</h1>
                    <div className='signup-input-form'>
                        <span className='signup-input-span'>Username</span>
                        <input type="text" className='signup-input-box' placeholder='Enter Username'></input>
                    </div>
                    
                    <div className='signup-input-form'>
                        <span className='signup-input-span'>Password</span>
                        <input type="password" className='signup-input-box' placeholder='Enter Password'></input>
                    </div>
                    <div className='signup-input-form'>
                        <span className='signup-input-span'>Email</span>
                        <input type="text" className='signup-input-box' placeholder='Enter your email'></input>
                    </div>
                         <button className="btn-signup mr-32">
                            <NavLink className="btn__singup-route" to="/home" onClick={this}>Sign Up</NavLink>
                        </button>
                    <div className='signup__login-link'>
                      <span>
                        You already have account <NavLink className="NavLink__to-login" to = "/login" onClick={this}><strong>login</strong></NavLink>
                      </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default signup;