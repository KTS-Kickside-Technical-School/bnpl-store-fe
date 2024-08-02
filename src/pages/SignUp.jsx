import { Link } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Header from "../components/layout/header";
import Footer from "../components/layout/Footer";

function UserSignUp() {
  return (
    <>
      <Header />
      <div className="main h-screen bg-[#C5D7E2] py-6 sm:px-4 lg:px-5">
        <div className="sm:mx-auto sm:w-full">
          <div className="top-7   flex justify-between items-center bg-[#008FE6] h-[300px] w-xl rounded ">
            <div className=" h-[300px] w-[600px] hidden sm:block pl-2  ">
              <h2 className="text-white px-5 py-5 ">Logo</h2>
              <img src="" alt="" />
            </div>

            <div className="bg-white h-[300px] w-[600px]   xm:w-full sm:max-w-md ">
              <h2 className="text-black  font-semibold px-3 py-5  text-[20px]">
                Hello, Welcome
              </h2>
              <div className=" py-2 px-4 shadow sm:rounded-lg sm:px-10">
                <form action="" className=" text-black">
                  {/* email label */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[12px] font-medium "
                    >
                      Email Address
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        placeholder="Enter your Email Address"
                        className="appearence-none block w-full px-1 py-1 border  rounded-md placeholder-gray-500 sm: text-[12px] bg-[#D9D9D9]"
                      />
                    </div>
                    <label
                      htmlFor="email"
                      className="block  text-[12px] font-medium "
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        type="Password"
                        placeholder="Enter your Password"
                        className="appearance-none block w-full px-1 py-1 border rounded-md placeholder-gray-500 sm: text-[12px] bg-[#D9D9D9]"
                      />
                     
                    </div>
                  </div>

                  <div className="mt-2">
                    <button className="      flex justify-center py-1 px-1 border  text-[8px] font-medium rounded-md text-white hover:bg-blue-400 bg-[#008FE6] ">
                      <PersonAddIcon fontSize="" className="flex m-0.5  " />
                      SIGN Up
                    </button>
                    <h2 className="text-[10px] text-black ">
                      Already Have  an account?{" "}
                      <Link>
                        <span className="text-[#008FE6]">Sign In</span>
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

export default UserSignUp;
