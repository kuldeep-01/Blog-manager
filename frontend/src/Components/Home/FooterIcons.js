import "./CSS/FooterIcons.css";
import PropTypes from "prop-types";

import { Link , useNavigate } from "react-router-dom";
import facebook from '../Images/facebook.png'
import insta from '../Images/instagram.png'
import linkedin from '../Images/linkedIn.png'



const FooterIcons = ({ className = "" }) => {

  const navigate = useNavigate();

  return (
    <section className={`footer-icons ${className}`} data-scroll-to="footerIcons">
      <div className="icons">
      <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
        <img
          className="phinstagram-logo-fill-icon"
          alt=""
          src={facebook}
        />
        </a>
        
        <a href="https://www.linkedin.com/in/kuldeep-singh-60a41b2b0/" target="_blank" rel="noopener noreferrer">
        <img 
          className="bilinkedin-icon" 
          alt="" 
          src={linkedin} 
        />
        </a>
        
        <a href="https://www.instagram.com/__kuldeep__singh__10?igsh=MXVxcW9wMWdiY3Jnaw==" target="_blank" rel="noopener noreferrer">
        <img
          className="bienvelope-fill-icon"
          alt=""
          src={insta}
        />
        </a>
      </div>
      <div className="copyright">
        <div className="madelyn-torff-2021">{`kuldeep-01 2024 `}</div>
      </div>


      
    </section>
  );
};

FooterIcons.propTypes = {
  className: PropTypes.string,
};

export default FooterIcons;