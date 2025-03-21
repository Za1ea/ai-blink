import React from "react";
import VideoRecorder from "./VideoRecorder";
import YouTube from "react-youtube";

const WatchVideo = () => {
    const options = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
          controls: 1,
        },
    };

    const videoContent = (
      
        <YouTube videoId="F3YR1-gJjWM" options={options} id="video"/>
        
    );

    const pageTitle = "Watching a Video"
    const currentPage = "watching"
    const nextPage = "/music"

    return (
        <VideoRecorder 
        pageTitle={pageTitle} 
        content={videoContent} 
        currentPage={currentPage} 
        nextPage={nextPage} 
        />
    );
};

export default WatchVideo;