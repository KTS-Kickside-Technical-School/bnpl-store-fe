import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/customerHeader'
import Customers404 from '../components/layout/Customers404'

const CustomersNotFound = () => {
    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    return (
        <>
            <Helmet>
                <title>404 Not found | Kickside shop - Your first BNPL Store in Rwanda</title>
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
            <Customers404 />
            <Footer />
        </>
    )
}

export default CustomersNotFound
