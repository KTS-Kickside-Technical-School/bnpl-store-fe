import React, { useEffect, useState } from 'react'
import Header from '../components/layout/customerHeader';
import Footer from '../components/layout/Footer';
import { Helmet } from 'react-helmet';
import VerifyAccountForm from '../components/auth/VerifyAccountForm';

const VerifyAccount = () => {
    const [currentUrl, setCurrentUrl] = useState("");
    const [emailReceiver, setEmailReceiver] = useState("");
    const [_id, setId] = useState("");

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);
    useEffect(() => {
        setEmailReceiver(hideEmail(localStorage.getItem("verifyEmail")))
        setId(localStorage.getItem("verifyId"))
    })
    const hideEmail = (email) => {
        const [localPart, domain] = email.split("@");

        if (localPart.length < 4) return email;

        const firstChar = localPart[0];
        const lastTwoChars = localPart.slice(-2);

        const maskedEmail = `${firstChar}****${lastTwoChars}@${domain}`;

        return maskedEmail;
    };

    return (
        <>
            <Helmet>
                <title>Verify your account | Kickside shop - Your first BNPL Store in Rwanda</title>
                <meta
                    name="description"
                    content="Welcome to Kickshop, your first BNPL Store in Rwanda. 
                        Browse our new brand collection from different countries like China, Korea, Turkey and even made in Rwanda"
                />
                <meta
                    name="keywords"
                    content="e-commerce, Rwanda, Made in Rwanda, Exports, Shopping, Brand New, Our collections,
                          BNPL, Store"
                />
                <meta
                    name="og:description"
                    content="Welcome to Kickshop, your first BNPL Store in Rwanda. Browse our new brand collection from different countries like China, Korea, Turkey and even made in Rwanda"
                />
                {currentUrl && <meta property="og:url" content={currentUrl} />}
            </Helmet>
            <Header />
            <div className="verifyAccount">
                <div className="container">
                    <h1>
                        Please verify your account
                    </h1>
                    <p>
                        We have sent you an email to <span>{emailReceiver && emailReceiver}</span> with an OTP.
                        Please enter the OTP below to verify your account.
                    </p>
                    <VerifyAccountForm />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default VerifyAccount
