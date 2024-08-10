

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-4">
      <div className=" container m-0 px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-3 md:mb-0">
          <h3 className=" text-[17px] font-bold mb-1">Quick links</h3>
          <ul className="text-[13px] font-normal ">
            <li>
              <a href="#" className="hover:underline ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy and Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-3 md:mb-0">
          <h3 className="text-[17px] font-bold mb-1">About Us</h3>
          <ul className="text-[13px] font-normal ">
            <li>
              <a href="#" className="hover:underline">
                Our Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                BNPL Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-3 md:mb-0">
          <h3 className="text-[17px] font-bold mb-1">Our Contacts</h3>
          <ul className="text-[13px] font-font-normal">
            <li>
              <a href="" className="hover:underline">
                +250790181511
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                bnpl@email.rw
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-1">
        <p className="text-[11px] font-bold">
          Developed in Love by Kickside Technical School
        </p>
      </div>
    </footer>
  );
};

export default Footer;
