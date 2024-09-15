import Header from "../components/layout/customerHeader";
import Footer from "../components/layout/Footer";
import SignupForm from "../components/auth/SignupForm";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function UserSignUp() {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <>
      <Helmet>
        <title>Create your account - Kickshop | Your first BNPL Store in Rwanda</title>
        <meta
          name="description"
          content="Welcome to Kickshop SIgnup Page, your first BNPL Store in Rwanda. 
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
      <SignupForm />
      <Footer />
    </>
  );
}

export default UserSignUp;
