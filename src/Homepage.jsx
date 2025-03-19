import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo_bai.png"

const Homepage = () => {
  return (
    <div className="content-container align-center">
      <img src={logo} alt="logo" className="big-logo"/>
      <h1>Welcome to the In a Blink Research App</h1>
      <p>
        This app is collecting data for a study on dry eye disease. 
        You will be recorded while performing different tasks so your blinking patterns can be analyzed.
        Thank you for contributing to medical research!
      </p>
      <Link to="/user-info">
        <button className="default_button">
          Start
        </button>
      </Link>
    </div>
  );
};

export default Homepage;
