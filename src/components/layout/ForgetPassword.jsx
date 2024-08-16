import Header from "./header";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import UndoIcon from "@mui/icons-material/Undo";


function ForgetPassword() {
  return (
    <div>
      <Header />
      <div className="main h-screen bg-[#C5D7E2] py-6 sm:px-4 lg:px-5">
        <div className="sm:mx-auto sm:w-full">
          <div className="  flex justify-between items-center bg-white h-[600px]   md:max-w-screen-xl lg:max-w-screen-xl md:ml-20 rounded ml-10  mr-10 ">
            <div className="  items-center px-3   ">
              <h2 className="text-black  text-center  font-semibold   text-[22px]">
                Forget Password
              </h2>

              <div className=" py-2 px-4 shadow sm:rounded-lg sm:px-10 ">
                <form action="" className=" text-black ">
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
                  </div>
                  <div>
                    <button className="      flex justify-center py-2 px-2 border  text-[13px] font-medium rounded-md text-white hover:bg-blue-400 bg-[#008FE6] mt-3">
                      <ForwardToInboxIcon
                        fontSize="small"
                        className="flex m-0.5  "
                      />
                      Save Password
                    </button>
                  </div>
                  <div>
                    <button className="      flex justify-center py-2 px-2 border  text-[13px] font-medium rounded-md text-white hover:bg-blue-400 bg-[#008FE6] mt-3">
                      <UndoIcon
                        fontSize="small"
                        className="flex m-0.5  "
                      />
                      back
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

export default ForgetPassword
