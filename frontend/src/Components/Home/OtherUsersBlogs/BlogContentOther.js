import React from "react";
import "../CSS/BlogContent.css";
import PropTypes from "prop-types";

import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

import pic from '../../Images/gama.png'

const BlogContent = ({ className = "" }) => {

  const navigate = useNavigate();

  const goToUserView = () => {
    navigate('/')
  }

  return (
    <section className={`blog-content ${className}`}>
      <div className="blog-header">
        <div className="background1" />
        <div className="blog-header-inner">
          <div className="frame-parent">
            <div className="featured-post-parent">
              <div className="featured-post">Markable words....</div>
              <div className="frame-group">
                <div className="step-by-step-guide-to-choosing-parent">
                  <h1 className="step-by-step-guide-to">
                  “To write is to take the heart out of its cage.”
                  </h1>
                  <div className="by-john-doe-container">
                    <span>{`By `}</span>
                    <span className="john-doe">Jodi Picoult</span>
                    {/* <span className="l">{`   l   May 23, 2022 `}</span> */}
                  </div>
                </div>
                <p className="duis-aute-irure">
                Hello writers and reader, as the developer behind this site, I’m thrilled to share this space with you. Our aim is to provide you with a seamless and enjoyable browsing experience while you explore our diverse range of articles and insights. If you have any feedback or encounter any issues, please feel free to reach out. Your input helps us make this blog even better!
                </p>
              </div>
            </div>
            <div className="button-wrapper">
              <button onClick={() => {goToUserView()}} className="button1">
                <b className="read-more">My Blogs</b>
              </button>
            </div>
          </div>
        </div>
        <img
          className="httpswwwpexelscomphotom-icon"
          loading="lazy"
          alt=""
          src={pic}
        />
      </div>
    </section>
  );
};

BlogContent.propTypes = {
  className: PropTypes.string,
};

export default BlogContent;