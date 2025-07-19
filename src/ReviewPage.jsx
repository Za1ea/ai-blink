import React from "react";
import { useFormData } from "./context/FormDataContext";

const ReviewPage = () => {
  const { metadata, osdiResults, videos } = useFormData();

  return (
    <div className="content-container">
      <h1>Review Your Submission</h1>

      {/* Display metadata */}
      <section style={{ marginBottom: "30px" }}>
        <h2>User Info (Metadata)</h2>
        <pre
          style={{
            padding: "10px",
            borderRadius: "5px",
            overflowX: "auto",
            fontSize: "14px",
          }}
        >
          {JSON.stringify(metadata, null, 2)}
        </pre>
      </section>

      {/* Display osdiResults */}
      <section style={{ marginBottom: "30px" }}>
        <h2>OSDI Results</h2>
        <pre
          style={{
            padding: "10px",
            borderRadius: "5px",
            overflowX: "auto",
            fontSize: "14px",
          }}
        >
          {JSON.stringify(osdiResults, null, 2)}
        </pre>
      </section>

      {/* Display all recorded videos */}
      <section>
        <h2>Recorded Videos</h2>
        {Object.entries(videos).length === 0 ? (
          <p>No videos recorded yet.</p>
        ) : (
          Object.entries(videos).map(([key, blob]) => {
            const videoURL = URL.createObjectURL(blob);
            return (
              <div key={key} style={{ marginBottom: "20px" }}>
                <h4>{key}</h4>
                <video src={videoURL} controls width={400} />
              </div>
            );
          })
        )}
      </section>
    </div>
  );
};

export default ReviewPage;