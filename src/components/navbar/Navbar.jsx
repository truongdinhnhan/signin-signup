import "./navbar.css";
import reluxLogo from "../../assets/logo.png";
import calendarImg from "../../assets/calendar.png";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { pages, services } from "../../libs/constants";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={reluxLogo} alt="logo" />
        <span className="logo_name">Relux</span>
      </div>
      <nav className="nav-items">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <NavDropdown dropList={services}>Services</NavDropdown>
        <NavDropdown dropList={pages}>Pages</NavDropdown>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </nav>
      <img src={calendarImg} alt="img" className="calendar-img" />
    </header>
  );
};

const NavDropdown = ({ children, dropList }) => {
  return (
    <div className="dropdown">
      <Link to="#" className="nav-link">
        {children}
      </Link>
      <ChevronDown size={24} className="dropdown-icon" />
      <ul className="dropdown-content">
        {dropList && dropList?.map((item) => (
          <li key={item.path}>
            <Link to={item.path} className="nav-link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar;
