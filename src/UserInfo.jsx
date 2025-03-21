import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
    // State to store user input
    const [formData, setFormData] = useState({
        age: "",
        gender: "",
        grade: "",
        race: [],
    });

    // List of races for checkboxes
    const raceOptions = ["Asian", "Black or African American", "Hispanic or Latino", "White", "Other"];

    const navigate = useNavigate(); // Hook for navigation

    // Handle text and dropdown changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    // Handle checkbox changes
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevData) => {
        if (checked) {
            return { ...prevData, race: [...prevData.race, value] };
        } else {
            return { ...prevData, race: prevData.race.filter((race) => race !== value) };
        }
        });
    };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can send this data to your backend here

    // Navigate to recorder page after form submission
    navigate("/environment-info");
  };

  return (
    <div className="content-container">
      <h1>User Information</h1>
      <form onSubmit={handleSubmit}>
        {/* Age Input */}
        <div style={{ marginBottom: "15px" }}>
          <label>
            Age:{" "}
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
              style={{ padding: "5px", fontSize: "16px" }}
            />
          </label>
        </div>

        {/* Gender Dropdown */}
        <div style={{ marginBottom: "15px" }}>
          <label>
            Gender:{" "}
            <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
                style={{ padding: "5px", fontSize: "16px" }}
            >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </label>
        </div>

        {/* Grade Dropdown */}
        <div style={{ marginBottom: "15px" }}>
          <label>
            Grade:{" "}
            <select
                name="grade"
                value={formData.grade}
                onChange={handleInputChange}
                required
                style={{ padding: "5px", fontSize: "16px" }}
            >
                <option value="">Select Grade</option>
                <option value="n/a">N/A</option>
                {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                    {i + 1}
                    </option>
                ))}
            </select>
          </label>
        </div>

        {/* Race Checkboxes */}
        <div>
          <label>Race:</label>
          <div className="align-center">
            {raceOptions.map((race) => (
              <label key={race} style={{ display: "block", margin: "5px 0" }}>
                <input
                  type="checkbox"
                  value={race}
                  checked={formData.race.includes(race)}
                  onChange={handleCheckboxChange}
                />
                {race}
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="default_button">Submit</button>
      </form>
    </div>
  );
};

export default UserInfo;
