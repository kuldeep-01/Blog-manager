import './CSS/input.css'
import PropTypes from "prop-types";
import { useNavigate, Link } from "react-router-dom";




const InputProcessor = ({ className = "" }) => {

  const navigate = useNavigate()

  const gotosignup= () => {
    navigate('/signup');
  }



  return (
    <section className={`input-processor ${className}`}>
      <div className="join-content">
        <div className="join-our-team-to-be-a-part-of-parent">
          <h1 className="join-our-team">
            Join us to be a part of our story
          </h1>
          <div className="lorem-ipsum-dolor-sit-amet-co-wrapper">
            <p className="lorem-ipsum-dolor3">
            "Writing is the canvas where your thoughts come to life, and reading is the adventure that lets others join in. Embrace the power of words—create, share, and explore the endless possibilities."
            </p>
          </div>
        </div>
        <div className="button-container">
          <button onClick={() => {gotosignup()}} className="button2">
            <b className="read-more1">Join Now</b>
          </button>
        </div>
      </div>
    </section>
  );
};

InputProcessor.propTypes = {
  className: PropTypes.string,
};

export default InputProcessor;