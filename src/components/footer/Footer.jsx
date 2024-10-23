import { Facebook, Instagram, MapPin, Phone, Twitter } from "lucide-react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container footer">
        <div className="footer_content">
          <div className="footer_contact">
            <h3>We don’t keep our beauty secrets</h3>
            <p>Enter your email for special promotions.</p>
            <div className="footer_contact-field">
              <input type="email" placeholder="Your E-mail" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="footer_info-item">
            <h3>Contact</h3>
            <ul>
              <li>
                <MapPin size={20} /> Da Nang, Viet Nam
              </li>
              <li>
                <Phone size={20} /> +(84) 123456789
              </li>
            </ul>
          </div>
          <div className="footer_info-item">
            <h3>Hours</h3>
            <ul>
              <li className="hour-item">
                <span className="day">Mon to Fri:</span>{" "}
                <span className="time">7:30 am - 1:00 am</span>
              </li>
              <li className="hour-item">
                <span className="day">Sat:</span>{" "}
                <span className="time">9:00 am - 1:00 am</span>
              </li>
              <li className="hour-item">
                <span className="day">Sun:</span>{" "}
                <span className="time">9:00 am - 11:30 pm</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom">
          <h3 className="logo">Relux</h3>
          <p>ReLux Spa © 2024 All Rights Reserved.</p>
          <div className="footer_bottom-social">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
