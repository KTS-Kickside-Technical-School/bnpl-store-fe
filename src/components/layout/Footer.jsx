import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-4">
      <div className=" container m-0 px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-3 md:mb-0">
          <h3 className=" text-[17px] font-bold mb-1">Quick links</h3>
          <ul className="text-[13px] font-normal ">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Products</Link>
            </li>
            <li>
              <Link>Privacy and Policy</Link>
            </li>
            <li>
              <Link>Terms and Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="mb-3 md:mb-0">
          <h3 className="text-[17px] font-bold mb-1">About Us</h3>
          <ul className="text-[13px] font-normal ">
            <li>
              <Link>Our Services</Link>
            </li>
            <li>
              <Link>BNPL Services</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="mb-3 md:mb-0">
          <h3 className="text-[17px] font-bold mb-1">Our Contacts</h3>
          <ul className="text-[13px] font-font-normal">
            <li>
              <Link>+250790181511</Link>
            </li>
            <li>
              <Link>bnpl@gmail.rw</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-1">
        <p className="text-[11px] font-bold">
          Developed in Love by <Link>Kickside technical School</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
