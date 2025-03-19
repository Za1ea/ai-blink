import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MultipleChoice from "./MultipleChoice";

const EnvInfo = () => {
    // State to store user input
    const [formData, setFormData] = useState({
        AC: "",
        heating: "",
        humidifier: "",
    });

    const options = ["Yes", "No"];
    const navigate = useNavigate();

    // Handle updates when a user selects an option
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value, // Updates the correct field
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        navigate("/select-reading");
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Environment Information</h1>
            <h3>Before we begin, please answer these questions about the environment you are currently in.</h3>
            <h3>Are you currently in a place with:</h3>
            
            <form onSubmit={handleSubmit}>
                <MultipleChoice 
                    question="air conditioning?"
                    options={options}
                    name="AC"
                    value={formData.AC}
                    onChange={handleChange} // Pass handler to update state
                />

                <MultipleChoice 
                    question="heating?"
                    options={options}
                    name="heating"
                    value={formData.heating}
                    onChange={handleChange}
                />

                <MultipleChoice 
                    question="a humidifier?"
                    options={options}
                    name="humidifier"
                    value={formData.humidifier}
                    onChange={handleChange}
                />

                {/* Submit Button */}
                <button type="submit" className="default_button">Submit</button>
            </form>
        </div>
    );
};

export default EnvInfo;