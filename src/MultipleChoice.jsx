import React from "react";

const MultipleChoice = ({ question, options, name, value, onChange }) => {
    return (
        <div className="flex-horizontal">
            <h4>{question}</h4>
            <div>
                {options.map((option, index) => (
                    <label key={index}>
                        <input
                            type="radio"
                            name={name} // Ensures each question has a unique group
                            value={option}
                            checked={value === option} // Checks the selected option
                            onChange={onChange} // Calls onChange in parent
                        />
                        {option}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default MultipleChoice;