import React, { useState, useEffect } from "react";
import VideoRecorder from "./VideoRecorder";
import { useRecording } from "./RecordingContext";

const CarrotGame = () => {
    const { isRecording } = useRecording();
    const [carrots, setCarrots] = useState([]);
    const [score, setScore] = useState(0);

    const generateCarrot = () => {
        console.log("Generating carrot...");  // Debugging

        const id = Date.now();
        const x = Math.random() * 90;
        const y = Math.random() * 80;

        setCarrots((prev) => [...prev, { id, x, y }]);

        setTimeout(() => {
            setCarrots((prev) => prev.filter((carrot) => carrot.id !== id));
        }, 3000);
    };

    const collectCarrot = (id) => {
        setCarrots((prev) => prev.filter((carrot) => carrot.id !== id));
        setScore((prev) => prev + 1);
    };

    useEffect(() => {
        if (!isRecording) return;  // Prevents running before recording starts

        console.log("Starting carrot generation...");  // Debugging

        const interval = setInterval(generateCarrot, 1000);

        return () => clearInterval(interval);
    }, [isRecording]);

    useEffect(() => {
        console.log("Updated carrots:", carrots);  // Debugging
    }, [carrots]);  // Runs whenever carrots change

    const content = () => (
        <div className="game-container">
            <h3>Pick as many carrots as possible by tapping on them!</h3>
            <div className="score-display">Score: {score}</div>
            {carrots.map((carrot) => (
                <img src='carrot_top.png' key={carrot.id} className="carrot"
                    style={{ top: `${carrot.y}%`, left: `${carrot.x}%` }}
                    onClick={() => collectCarrot(carrot.id)}
                />
            ))}
        </div>
    );

    return (
        <VideoRecorder pageTitle="Carrot Game Recording" content={content} currentPage="playing-game" nextPage="/osdi-questionnaire" />
    );
};

export default CarrotGame;
