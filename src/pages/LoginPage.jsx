import { Link } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Header from "../components/layout/header";
import Footer from "../components/layout/Footer";

function UserLogin() {
  return (
    <>
      <Header />
      <div className="main  bg-[#C5D7E2] py-6 sm:px-4 lg:px-5">
        <div className="sm:mx-auto sm:w-full">
          <div className="  flex justify-between items-center bg-[#008FE6] h-[600px]  max-w-screen-2xl rounded ">
            <div className="  hidden sm:block pl-2  ">
              <h2 className="text-white px-5 py-5 ">Logo</h2>
              <img src="" alt="" />
            </div>

            <div className="bg-white h-[600px] w-[600px]    ">
              <h2 className="text-black  font-semibold px-3 py-5  text-[22px]">
                Welcome back,
              </h2>
              <div className=" py-2 px-4 shadow sm:rounded-lg sm:px-10">
                <form action="" className=" text-black">
                  {/* email label */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[17px] font-medium "
                    >
                      Email Address
                    </label>
                    <div className="mt-3">
                      <input
                        type="email"
                        placeholder="Enter your Email Address"
                        className="appearence-none block w-full px-3 py-2 border  rounded-md placeholder-gray-500 sm: text-[16px] bg-[#D9D9D9]"
                      />
                    </div>
                    <label
                      htmlFor="email"
                      className="block  text-[17px] font-medium "
                    >
                      Password
                    </label>
                    <div className="mt-3">
                      <input
                        type="Password"
                        placeholder="Enter your Password"
                        className="appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-500 sm: text-[16px] bg-[#D9D9D9]"
                      />
                      <div className="flex justify-end mt-3">
                        <h2 className=" text-[14px] font-medium text-gray-700">
                          <Link to="/">Forgot Password?</Link>
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button className="      flex justify-center py-2 px-2 border  text-[13px] font-medium rounded-md text-white hover:bg-blue-400 bg-[#008FE6] ">
                      <ExitToAppIcon fontSize="small" className="flex m-0.5  " />
                      SIGN IN
                    </button>
                    <h2 className="text-[12px] text-black mt-2 ">
                      Dont have an account yet?{" "}
                      <Link to="/signup">
                        <span className="text-[#008FE6]">SignUp</span>
                      </Link>
                    </h2>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserLogin;
