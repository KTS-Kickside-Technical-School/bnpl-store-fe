import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import loginPhoto from '../../assets/images/loginPhoto.png';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { userLogin } from '../../store/redux/slices/authSlice';
import { userViewProfile } from '../../store/redux/slices/userSlice';

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().required('Password is required')
        }),
        onSubmit: async (values) => {
            setLoading(true);
            try {
                const response = await dispatch(userLogin(values))
                if (response.meta.requestStatus === 'fulfilled') {
                    toast.success('Login successful!', { toastId: 'form-success' });
                    const profile = await dispatch(userViewProfile())
                    console.log("profile", profile)
                    localStorage.setItem("token", response.payload.data.newSession.token);

                    // navigate('/');
                } else {
                    toast.error(response.payload);
                }
            } catch (error) {
                toast.error('An error occurred during login.');
            } finally {
                setLoading(false);
            }
        },
        validateOnChange: true,
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
                        <h2>Login to your account to access our platform</h2>
                        <p>Welcome back to Kickshop Rwanda, your first BNPL E-Commerce site in the country</p>
                        <img src={loginPhoto} alt="Login" />
                    </div>
                </div>
                <div className="right">
                    <div className="cont">
                        <h2>Welcome back,</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="field">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Enter your Email Address"
                                    disabled={loading}
                                />
                            </div>
                            <div className="field">
                                <div className="field-row">
                                    <label htmlFor="password">Password</label>
                                    <Link to="/">Forgot Password?</Link>
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Enter your Password"
                                    disabled={loading}
                                />
                            </div>
                            {displayErrors()}
                            <div className="button-field">
                                <button type="submit" disabled={loading}>
                                    {loading ? 'Signing in...' : (
                                        <>
                                            <ExitToAppIcon fontSize="small" className="flex m-0.5" />
                                            Sign in
                                        </>
                                    )}
                                </button>
                                <p>
                                    Don't have an account yet?{" "}
                                    <Link to="/signup">
                                        <span className="text-[#008FE6]">Sign Up</span>
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

export default LoginForm;
