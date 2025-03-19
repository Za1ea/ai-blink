import React, { createContext, useState, useContext } from "react";

// Create the context
const RecordingContext = createContext();

// Custom hook to use the context easily
export const useRecording = () => useContext(RecordingContext);

// Provider component to wrap the app
export const RecordingProvider = ({ children }) => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <RecordingContext.Provider value={{ isRecording, setIsRecording }}>
      {children}
    </RecordingContext.Provider>
  );
};