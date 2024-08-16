import PasswordIcon from "@mui/icons-material/Password";
import Header from "./header";

function ResetPassword() {
  return (
    <div>
      <Header />
      <div className="main h-screen bg-[#C5D7E2] py-6 sm:px-4 lg:px-5">
        <div className="sm:mx-auto sm:w-full">
          <div className="  flex justify-between items-center bg-white h-[600px]   md:max-w-screen-xl lg:max-w-screen-xl md:ml-20 rounded ml-10  mr-10 ">
            <div className="  items-center px-3   ">
              <h2 className="text-black  text-center  font-semibold px-20 py-5  text-[22px]">
                Reset Password
              </h2>

              <div className=" py-2 px-4 shadow sm:rounded-lg sm:px-10 ">
                <form action="" className=" text-black ">
                  {/* email label */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[17px] font-medium "
                    >
                      New Password
                    </label>
                    <div className="mt-3">
                      <input
                        type="email"
                        placeholder="Enter your New Password"
                        className="appearence-none block w-full px-3 py-2 border  rounded-md placeholder-gray-500 sm: text-[16px] bg-[#D9D9D9]"
                      />
                    </div>
                    <label
                      htmlFor="email"
                      className="block  text-[17px] font-medium "
                    >
                      Retype Password
                    </label>
                    <div className="mt-3">
                      <input
                        type="Password"
                        placeholder="Retype your Password"
                        className="appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-500 sm: text-[16px] bg-[#D9D9D9]"
                      />
                    </div>
                  </div>
                  <div>
                    <button className="      flex justify-center py-2 px-2 border  text-[13px] font-medium rounded-md text-white hover:bg-blue-400 bg-[#008FE6] mt-3">
                      <PasswordIcon fontSize="small" className="flex m-0.5  " />
                      Save Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
