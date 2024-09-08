import React from 'react'
import { Link } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import signupPhoto from "../../assets/images/signUpPhoto.png"

const SignupForm = () => {
    return (
        <div className="login-container">
            <div className="row">
                <div className="left">
                    <div className="cont">
                        <h2 className="">Create your account to access our platform</h2>
                        <p>Welcome to Kickshop Rwanda, you first BNPL E-Commerce site in the country</p>
                        <img src={signupPhoto} alt="Login Image  " />
                    </div>
                </div>
                <div className="right">
                    <div className="cont">
                        <h2 className="title">
                            Welcome
                        </h2>
                        <form action="" className="">
                            <div className='field'>
                                <label htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your Email Address" />
                            </div>
                            <div className="field">
                                <div className="field-row">
                                    <label htmlFor="email">
                                        Password
                                    </label>
                                </div>
                                <input type="password" placeholder="Enter your Password" />
                            </div>
                            <div className='button-field'>
                                <button className="">
                                    <ExitToAppIcon fontSize="small" className="flex m-0.5  " />
                                    Sign in
                                </button>
                                <p className="">
                                   Already have an account yet?{" "}
                                    <Link to="/login">
                                        <span className="">Login</span>
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignupForm
