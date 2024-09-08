import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import signupPhoto from "../../assets/images/signUpPhoto.png";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'; 
import { createAccount } from '../../store/redux/slices/authSlice'; 
import CircularProgress from '@mui/material/CircularProgress'; 

const SignupForm = () => {
    const [loading, setLoading] = useState(false); 
    const dispatch = useDispatch(); 

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required')
        }),
        onSubmit: (values) => {
            setLoading(true);
            dispatch(createAccount(values))
                .then((response) => {
                    console.log(response)
                    if (response.meta.requestStatus === 'fulfilled') {
                        toast.success('Account created successfully!', { toastId: 'form-success' });
                    } else {
                        toast.error(response.payload, { toastId: 'form-error' });
                    }
                })
                .catch((error) => {
                    toast.error(error.message, { toastId: 'form-error' });
                })
                .finally(() => {
                    setLoading(false);
                });
        },
        validateOnChange: false,
        validateOnBlur: true
    });

    const displayErrors = () => {
        if (formik.errors.email && formik.touched.email) {
            toast.error(formik.errors.email, { toastId: 'email-error' });
        }
        if (formik.errors.password && formik.touched.password) {
            toast.error(formik.errors.password, { toastId: 'password-error' });
        }
    };

    return (
        <div className="login-container">
            <div className="row">
                <div className="left">
                    <div className="cont">
                        <h2>Create your account to access our platform</h2>
                        <p>Welcome to Kickshop Rwanda, your first BNPL E-Commerce site in the country</p>
                        <img src={signupPhoto} alt="Login" />
                    </div>
                </div>
                <div className="right">
                    <div className="cont">
                        <h2 className="title">Welcome</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='field'>
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your Email Address"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email} required
                                />
                            </div>

                            <div className="field">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your Password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password} required
                                />
                            </div>

                            {displayErrors()}

                            <div className='button-field'>
                                <button type="submit" disabled={loading}>
                                    {loading ? (
                                        <CircularProgress size={24} color="inherit" />
                                    ) : (
                                        <>
                                            <ExitToAppIcon fontSize="small" className="flex m-0.5" />
                                            Sign up
                                        </>
                                    )}
                                </button>
                                <p>
                                    Already have an account?{" "}
                                    <Link to="/login">
                                        <span>Login</span>
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
