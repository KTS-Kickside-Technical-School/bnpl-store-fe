import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { CircularProgress } from '@mui/material';
import { Verified, VerifiedUser } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { verfiyAccount } from '../../store/redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const VerifyAccountForm = () => {
    const [_id, setId] = useState("");
    const [loading, setLoading] = useState(false);
    const [emailReceiver, setEmailReceiver] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        setEmailReceiver(localStorage.getItem("verifyEmail"))
        setId(localStorage.getItem("verifyId"));
    }, []);

    const formik = useFormik({
        initialValues: {
            otp: ''
        },
        validationSchema: Yup.object({
            otp: Yup.string()
                .required('OTP is required')
                .min(6, 'OTP must be at least 6 digits')
        }),
        onSubmit: (values) => {
            values.userId = _id;
            setLoading(true);
            dispatch(verfiyAccount(values))
                .then((response) => {
                    if (response.meta.requestStatus === 'fulfilled') {
                        toast.success('Account verified successfully!', { toastId: 'verify-success' });
                        localStorage.removeItem("verifyEmail");
                        localStorage.removeItem("verifyId");
                        navigate("/login");
                    }
                    else {
                        toast.error(response.payload, { toastId: 'verifying-error' })
                    }
                }).catch((error) => {
                    toast.error(error.message, { toastId: 'form-error' });
                })
                .finally(() => {
                    setLoading(false);
                });
        },
        validateOnChange: true,
        validateOnBlur: true,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                type="text"
                placeholder="Enter OTP"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.otp}
                name="otp"
            />
            {formik.errors.otp && formik.touched.otp && (
                <div className="error-message">{formik.errors.otp}</div>  // Display errors in JSX
            )}

            <button type="submit" disabled={loading}>
                {loading ? (
                    <CircularProgress size={22} color='inherit' />
                ) : (
                    <>
                        <Verified fontSize="12px" className='icon' />
                        Verify
                    </>
                )}
            </button>
        </form>
    );
};

export default VerifyAccountForm;
