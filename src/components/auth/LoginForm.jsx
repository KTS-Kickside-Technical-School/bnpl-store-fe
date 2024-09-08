import React from 'react'
import { Link } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import loginPhoto from "../../assets/images/loginPhoto.png"

const LoginForm = () => {
    return (
        <div className="login-container">
            <div className="row">
                <div className="left">
                    <div className="cont">
                        <h2 className="">Login to your account to access our platform</h2>
                        <p>Welcome back to Kickshop Rwanda, you first BNPL E-Commerce site in the country</p>
                        <img src={loginPhoto} alt="Login Image  " />
                    </div>
                </div>
                <div className="right">
                    <div className="cont">
                        <h2 className="title">
                            Welcome back,
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
                                    <Link to="/">Forgot Password?</Link>
                                </div>
                                <input type="password" placeholder="Enter your Password" />
                            </div>
                            <div className='button-field'>
                                <button className="">
                                    <ExitToAppIcon fontSize="small" className="flex m-0.5  " />
                                    Sign in
                                </button>
                                <p className="">
                                    Don't have an account yet?{" "}
                                    <Link to="/signup">
                                        <span className="text-[#008FE6]">SignUp</span>
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

export default LoginForm
