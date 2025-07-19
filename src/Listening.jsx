// import React, { useRef } from "react";

// const TestAudioPlayer = () => {
//   const audioRef = useRef(null);

//   const handlePlay = () => {
//     if (audioRef.current) {
//       audioRef.current
//         .play()
//         .then(() => console.log("Audio is playing!"))
//         .catch((err) => console.error("Error playing audio:", err));
//     }
//   };

//   return (
//     <div>
//       <button onClick={handlePlay}>Play Local Audio</button>
//       <audio ref={audioRef} src="/dancing-in-the-stardust-no-copyright.mp3" />
//     </div>
//   );
// };

// export default TestAudioPlayer;


import React from "react";
import VideoRecorder from "./VideoRecorder";

const ListeningPage = () => {
  const audioFile = "../dancing-in-the-stardust-no-copyright.mp3"; // Replace with your actual MP3 file path
  const pageTitle = "Listening";
  const nextPage = "/carrot-game";
  const credit = "EGLAIR by Alex-Productions | https://onsound.eu/ Music promoted by https://www.free-stock-music.com Creative Commons / Attribution 3.0 Unported License (CC BY 3.0) https://creativecommons.org/licenses/by/3.0/deed.en_US"

  console.log("Audio file path:", audioFile);

  return (
    <div>
      <audio src="public\dancing-in-the-stardust-no-copyright.mp3" controls />
    
      <VideoRecorder
        pageTitle={pageTitle}
        content={<p>While recording, listen to this audio.</p>}
        currentPage={pageTitle.toLowerCase()}
        nextPage={nextPage}
        audioSrc={audioFile}
      />
    </div>
  );
};

export default ListeningPage;
