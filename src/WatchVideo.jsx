import React from "react";
import VideoRecorder from "./VideoRecorder";

const WatchVideo = () => {
    const videoContent = (
        <div>
            <p>Watch this video while being recorded:</p>
            <video controls autoPlay loop style={{ width: "100%", maxWidth: "500px" }}>
                <source src="example-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );

    const pageTitle = "Video Page"

    const nextPage = "/music"

    return (
        <VideoRecorder 
        pageTitle={pageTitle} 
        content={videoContent} 
        nextPage={nextPage} 
        />
    );
};

export default WatchVideo;