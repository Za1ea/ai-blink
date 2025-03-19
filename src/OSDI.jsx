import React, { useState } from "react";

const OSDIQuestionnaire = () => {
    // Sections of the questionnaire
    const sections = {
        "In the last week, have you": [
            "Experienced eyes that are sensitive to light?",
            "Felt gritty or sandy sensations in your eyes?",
            "Painful or sore eyes?",
            "Blurred vision?",
            "Poor vision?"
        ],
        "In the last week, have problems with your eyes limited you in": [
            "Reading?",
            "Seeing at night?",
            "Working with a computer or bank machine (ATM)?",
            "Watching TV?"
        ],
        "In the last week, have your eyes felt uncomfortable in": [
            "Windy conditions?",
            "Air-conditioned places?",
            "Dry environments?"
        ]
    };

    // Answer options with corresponding numerical values
    const options = [
        { label: "Never", value: 0 },
        { label: "Sometimes", value: 1 },
        { label: "Half of the time", value: 2 },
        { label: "Most of the time", value: 3 },
        { label: "All of the time", value: 4 }
    ];

    const [responses, setResponses] = useState({});

    // Handle answer selection
    const handleChange = (event, question) => {
        const value = parseInt(event.target.value, 10); // Convert string to integer
        console.log(event.target.value)
        setResponses((prev) => ({
            ...prev,
            [question]: value
        }));
    };

    // Calculate OSDI Score
    const calculateScore = () => {
        const answeredValues = Object.values(responses);
        if (answeredValues.length === 0) return 0; // No responses, score is 0

        const totalScore = answeredValues.reduce((sum, value) => sum + value, 0);
        const OSDIScore = totalScore*25/answeredValues.length
        return OSDIScore; // Raw score (You can normalize this if needed)
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const finalScore = calculateScore();
        let dry_eye_status = "";
        let dry_eye_msg = "";

        if (finalScore <= 12) {
            dry_eye_status = "None"
        }
        else if (finalScore <= 22) {
            dry_eye_status = "mild"
        }
        else if (finalScore <= 32) {
            dry_eye_status = "moderate"
        }
        else { 
            dry_eye_status = "severe"
        }

        console.log("OSDI Responses Submitted:", responses);
        console.log("Final OSDI Score:", finalScore);
        if (dry_eye_status == "None") {
            console.log("No dry eye")
            dry_eye_msg = "Congratulations! You don't have dry eye disease!"
        }
        else {
            console.log(`Dry eye: ${dry_eye_status}`)
            dry_eye_msg = `You have ${dry_eye_status} dry eye disease.`
        }
        alert(`Your OSDI Score: ${finalScore}\n ${dry_eye_msg}`);
    };

    return (
        <div className="content-container align-left">
            <h1>OSDI Questionnaire</h1>
            <form onSubmit={handleSubmit}>
                {Object.entries(sections).map(([sectionTitle, questions]) => (
                    <div key={sectionTitle} style={{ marginBottom: "20px" }}>
                        <h3>{sectionTitle}</h3>
                        {questions.map((question, index) => (
                            <div key={index} style={{ marginBottom: "15px" }}>
                                <label htmlFor={`question-${question}`} style={{ display: "block", fontWeight: "bold" }}>
                                    {question}
                                </label>
                                <select
                                    id={`question-${question}`}
                                    value={responses[question] ?? ""}
                                    onChange={(event) => handleChange(event, question)}
                                    style={{ width: "100%", padding: "8px", fontSize: "16px" }}
                                    required
                                >
                                    <option value="" disabled>Select an option</option>
                                    {options.map(({ label, value }) => (
                                        <option key={value} value={value}>{label}</option>
                                    ))}
                                </select>
                            </div>
                        ))}
                    </div>
                ))}
                <button type="submit" style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "#4caf50", color: "white", cursor: "pointer", borderRadius: "5px" }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default OSDIQuestionnaire;