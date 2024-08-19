import { useRef, useState, useEffect, useContext} from "react";
import axios from '../api/axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import logo from '../assets/logo.png';
import Rec from '../assets/bg.png';
import {Link} from 'react-router-dom';
import close from '../assets/close2.svg';
import AuthContext from '../Context/AuthProvider';
import '../Signup/Register.css';
import './Login.css';


const LOGIN_URL ='/login';

const New_pass = (props) => {
    
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate passwords
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    // API call to reset password
    // You can adjust this depending on your API structure
    const resetPasswordApi = async () => {
      try {
        const response = await fetch('/API/Auth/ResetPassword', {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: JSON.stringify({ password }),
        });
        console.log(response);
        

        if (response.ok) {
          setSuccess('Password reset successfully!');
        } else {
          setError('Failed to reset password. Try again.');
        }
      } catch (err) {
        setError('Something went wrong. Please try again later.');
      }
    };

    resetPasswordApi();
  };

    // const [password, setpassword] = useState();
    // const [confirmpass, setconfirmpass] = useState();
    // const [errMsg, seterrMsg] = useState("");
    // const [Success, setSuccess] = useState(false);

    // const handleSubmit = async (e) => {

    // }
    return (
        <>
                <div className="">
                    <section className="container-fluid reg-bg-con">
                        <div className="row vh-100">
                            <div className="col-md-12 col-sm-12">
                                <div className="form-container-log">
                                    <div className="inner">
                                        <div className="close-btn-container">
                                            <Link to="/" className='no-underline-close'><img src={close} onClick={props.onClose}/>
                                            </Link> 
                                        </div>
                                        {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-between align-items-center">
                                                <h1 className="title mx-auto">New Password</h1>
                                            </div>
                                        </div>
                                        <form onSubmit={handleSubmit} className="ms-4 me-4">
                                            <label htmlFor="password">
                                                Password:
                                            </label>
                                            <input
                                                placeholder="********"
                                                className="form-control mt-2"
                                                type="password"
                                                id="password"
                                                required
                                                onChange={handlePasswordChange}
                                                value={password}
                                            />
                                            <label htmlFor="confirm password">
                                                Password:
                                            </label>
                                            <input
                                                placeholder="********"
                                                className="form-control mt-2"
                                                type="password"
                                                id="password"
                                                required
                                                onChange={handleConfirmPasswordChange}
                                                value={confirmPassword}
                                                
                                            />
                                            {error && <p style={{ color: 'red' }}>{error}</p>}
                                            {success && <p style={{ color: 'green' }}>{success}</p>}
                    
                                            <button className="btn submit mt-4">Submit</button>
                                            {/**!validemail || !validpassword */}
                                            <p className="line mt-2">
                                                Don't have an Account?&nbsp;
                                                <span className="line">
                                                    <Link onClick={() => props.setcurrentPage("register")}>Sign Up</Link>
                                                </span>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            
        </>
               
    )
}

export default New_pass