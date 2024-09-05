import { Link } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Header from "../components/layout/customerHeader";
import Footer from "../components/layout/Footer";

function UserSignUp() {
  return (
    <>
      <Header />
      <div className="main h-screen bg-[#C5D7E2] py-6 sm:px-4 lg:px-5">
        <div className="sm:mx-auto sm:w-full">
          <div className="  flex justify-between items-center bg-[#008FE6] h-[600px]  max-w-screen-2xl rounded ">
            <div className="  hidden sm:block pl-2  ">
              <h2 className="text-white px-5 py-5 ">Logo</h2>
              <img src="" alt="" />
            </div>

            <div className="bg-white h-[600px] w-[600px]    ">
              <h2 className="text-black  font-semibold px-3 py-5  text-[22px]">
               Hello  Welcome 
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
                       
                      </div>
                    </div>
                  </div>

                  <div>
                    <button className="      flex justify-center py-2 px-2 border  text-[13px] font-medium rounded-md text-white hover:bg-blue-400 bg-[#008FE6] ">
                      <PersonAddIcon
                        fontSize="small"
                        className="flex m-0.5  "
                      />
                      SIGN UP
                    </button>
                    <h2 className="text-[12px] text-black mt-2 ">
                      Already have an account yet?{" "}
                      <Link to="/login">
                        <span className="text-[#008FE6]">SignIn</span>
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
