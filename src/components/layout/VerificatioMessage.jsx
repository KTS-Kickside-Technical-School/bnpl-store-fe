import Header from "./header";

function Verified() {
  return (
    <div>
      <Header />
      <div className="main h-screen bg-[#C5D7E2] py-6 sm:px-4 lg:px-5">
        <div className="sm:mx-auto sm:w-full">
          <div className="  flex justify-between items-center bg-white h-[600px]  max-w-screen-xl rounded ml-32 mr-10 ">
            <div className="  hidden sm:block pl-2  ">
              <img
                src=""
                alt="Sucess Image"
                className="items-center mt-30 ml-80 px-36 w-full "
              />
              <h2 className="text-[#008FE6] text-2xl font-bold items-center mt-60 ml-80 px-36 ">
                Email Verified Successful
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verified;
