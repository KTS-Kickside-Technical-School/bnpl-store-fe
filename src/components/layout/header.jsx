import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full px-2 py-4 h-[32px] bg-white shadow-lg top-0 z-30 flex items-center justify-between sm:px-4 lg:px-5">
      <div className="mr-2 ">
        <Link to="/">
          <h2 className="text-black  text-[12px]">Logo</h2>
        </Link>
      </div>
      <div className="flex items-center justify-center flex-1">
        <div className="flex items-center justify-center rounded-lg bg-[#C5D7E2] w-full sm:w-auto">
          <SearchIcon fontSize="small" />
          <input
            type="text"
            placeholder="Search For Products"
            className="bg-transparent w-full  text-[12px] sm:w-[314px]"
          />
        </div>
      </div>
      <div className="flex items-center  text-[12px] mr-2">
        <Link to="/login" className="flex items-center">
          <AccountCircleIcon fontSize="small" />
          <h2 className="text-black  hidden sm:block">Login</h2>
        </Link>

        <div className="hidden sm:flex items-center  text-[12px] ml-4">
          <WhatsAppIcon fontSize="small" />
          <h2 className="text-black  hidden sm:block">+250782688040</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
