import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRecording } from "./RecordingContext";

const VideoRecorder = ({ pageTitle = "Recording Page", content, nextPage, audioSrc, onStart }) => {
    const { isRecording, setIsRecording } = useRecording();
    const [recordedVideo, setRecordedVideo] = useState(null);
    const [showNextButton, setShowNextButton] = useState(false);
    const mediaRecorderRef = useRef(null);
    const recordedChunksRef = useRef([]);
    const audioRef = useRef(null);
    const navigate = useNavigate();

    const handleStartRecording = async () => {
        alert("Attempting to access the camera...");

        // Check if mediaDevices API is available
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            alert("getUserMedia is not supported in this browser.");
            console.error("Error: navigator.mediaDevices is undefined or does not support getUserMedia.");
            return;
        }

        try {
            // Request video only (no audio)
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            alert("Camera access granted");
            recordedChunksRef.current = []; // Clear previous recordings

            mediaRecorderRef.current = new MediaRecorder(stream, { mimeType: "video/webm" });

            mediaRecorderRef.current.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    recordedChunksRef.current.push(event.data);
                }
            };

            mediaRecorderRef.current.onstop = () => {
                const blob = new Blob(recordedChunksRef.current, { type: "video/webm" });
                setRecordedVideo(URL.createObjectURL(blob));
                stream.getTracks().forEach((track) => track.stop()); // Stop the camera
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);
            if (onStart) onStart();
            setShowNextButton(false); // Hide the "Next" button when recording starts

            // Start playing audio if provided
            if (audioSrc && audioRef.current) {
                audioRef.current.play();
            }

            // Automatically stop recording after 10 seconds
            setTimeout(() => handleStopRecording(true), 10000);

        } catch (error) {
            console.error("Error accessing camera:", error);
            alert(`Camera access error: ${error.message}`);
        }
        
    };

    const handleStopRecording = (timedOut = false) => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
        }
        setIsRecording(false);
        setShowNextButton(timedOut)

        // Stop playing audio if it is playing
        if (audioSrc && audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0; // Reset audio to the beginning
        }
    };

    const handleNext = () => {
        if (nextPage) {
            navigate(nextPage); // Navigate to the specified page
        } else {
            alert("Next page not defined!");
        }
      };

    return (
        <div className="video-recorder">
            {!isRecording && <h1 className="page-title">{pageTitle}</h1>}

            {/* Conditionally Display Content */}
            {isRecording && (typeof content === "function" ? content() : content)}
                {/* <div className="content-container">
                    {content}
                    {audioSrc && <audio ref={audioRef} src={audioSrc} />}
                </div>
            )} */}

            {/* Start/Stop Recording Buttons */}
            {!isRecording ? (
                <button onClick={handleStartRecording} className="record-button">
                    Start Recording
                </button>
            ) : (
                <button onClick={() => handleStopRecording(false)} className="record-button stop">
                    Stop Recording
                </button>
            )}

            {/* Display Recorded Video */}
            {recordedVideo && (
                <div style={{ marginTop: "20px" }}>
                    <h2>Recorded Video:</h2>
                    <video src={recordedVideo} controls className="video-playback" />
                </div>
            )}

            {/* Conditionally Display "Next" Button */}
            {showNextButton && (
                <button
                    onClick={handleNext}
                    style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        fontSize: "16px",
                        backgroundColor: "#4caf50",
                        color: "white",
                        cursor: "pointer",
                        borderRadius: "5px",
                    }}
                >
                Next
                </button>
            )}
        </div>
    );
};

export default VideoRecorder;
