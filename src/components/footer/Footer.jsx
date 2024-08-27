import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerTextContainer">
        <h2 className="footerHeading">Sign me up</h2>
        <p className="footerParagraph">
          Be the first to know about new products
        </p>
      </div>
      <form className="footerFormContainer">
        <input
          type="email"
          className="singUpFormInput"
          placeholder="Enter your email"
        />
        <button type="submit" className="signUpBtn">
          <i className="fas fa-arrow-right"></i>
        </button>
      </form>
      <p className="copyright">CodeAndCopy &copy; All Right Reserverd.</p>
    </div>
  );
};

export default Footer;