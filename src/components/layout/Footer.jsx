import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="customer-footer">
      <div className="row">
        <div className="one">
          <h3>Quick links</h3>
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
        <div className="one">
          <h3>About Us</h3>
          <ul>
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
        <div className="one">
          <h3>Our Contacts</h3>
          <ul>
            <li>
              <Link>+250790118511</Link>
            </li>
            <li>
              <Link to={'mailto:bnpl@gmail.com'}>bnpl@gmail.rw</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="credit">
        Developed in Love by  <Link to={'https://www.kickside.rw'} target="_blank">Kickside Tech Team</Link>
      </div>
    </footer>
  );
};

export default Footer;
