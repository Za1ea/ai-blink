import { useNavigate } from "react-router-dom";
import { useFormData } from "./context/FormDataContext";
import MultipleChoice from "./MultipleChoice";

const UserInfo = () => {
  const { metadata, setMetadata } = useFormData(); // Global state
  const navigate = useNavigate();

  const raceOptions = ["Asian", "Black or African American", "Hispanic or Latino", "White", "Other"];
  const options = ["Yes", "No"];

  // Handle text, dropdown, multiple choice changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMetadata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle checkbox changes for race
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setMetadata((prev) => {
      const currentRace = prev.race || [];
      if (checked) {
        return { ...prev, race: [...currentRace, value] };
      } else {
        return { ...prev, race: currentRace.filter((r) => r !== value) };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", metadata); // Using global metadata
    navigate("/select-reading");
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
              value={metadata.age || ""}
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
              value={metadata.gender || ""}
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
              value={metadata.grade || ""}
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
                  checked={(metadata.race || []).includes(race)}
                  onChange={handleCheckboxChange}
                />
                {race}
              </label>
            ))}
          </div>
        </div>

        {/* Environment Info */}
        <div>
          <h2>Environment Information</h2>
          <h4>Are you currently in a place with:</h4>

          <MultipleChoice
            question="air conditioning?"
            options={options}
            name="AC"
            value={metadata.AC || ""}
            onChange={handleInputChange}
          />

          <MultipleChoice
            question="heating?"
            options={options}
            name="heating"
            value={metadata.heating || ""}
            onChange={handleInputChange}
          />

          <MultipleChoice
            question="a humidifier?"
            options={options}
            name="humidifier"
            value={metadata.humidifier || ""}
            onChange={handleInputChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="default_button">Submit</button>
      </form>
    </div>
  );
};

export default UserInfo;
