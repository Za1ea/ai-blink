import React from "react";
import { useNavigate } from "react-router-dom";

const TextSelection = () => {
  const navigate = useNavigate();

  const handleSelect = (choice) => {
    // Navigate to the reading page, passing the text choice as a state
    navigate("/reading", { state: { textChoice: choice } });
  };

  return (
    <div>
        <h1>Select a Reading</h1>
        <h4>Select a passage below you would like to read about for one minute while being recorded.</h4>
        <div className="vertical_buttons">
            <button className="option" onClick={() => handleSelect("text1")}>About Dry Eye Disease</button>
            <button className="option" onClick={() => handleSelect("text2")}>Alice in Wonderland excerpt</button>
            <button className="option" onClick={() => handleSelect("text3")}>pop culture</button>
        </div>
        
    </div>
  );
};

export default TextSelection;
