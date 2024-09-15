import React from 'react'
import image404 from "../../assets/images/customers404.jpg"

const Customers404 = () => {
    return (
        <div className='customers404'>
            <div className="container">
                <img src={image404} alt="404 Image" />
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for could not be found.</p>
            </div>
        </div>

    )
}

export default Customers404
