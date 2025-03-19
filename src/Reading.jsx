import React from "react";
import { useLocation } from "react-router-dom";
import VideoRecorder from "./VideoRecorder";

const ReadingPage = () => {

    const location = useLocation();
    const { textChoice } = location.state || {}; // Get the choice passed from the previous page

    
    // Define the different texts
    const texts = {
        text1: (
            <p>
                While being recorded, please read this passage about dry eye disease: <br />
                "The ocean is vast, mysterious, and full of life. Protecting marine
                ecosystems is essential for the health of our planet."
            </p>
        ),
        text2: (
            <div>
                <p>
                    While being recorded, please read this Alice in Wonderland excerpt: 
                </p>
                <p>There was nothing so very remarkable in that; nor did Alice think it so very much out of the 
                way to hear the Rabbit say to itself, "Oh dear! Oh dear! I shall be too late!" (when she thought 
                it over afterwards, it occurred to her that she ought to have wondered at this, but at the time 
                it all seemed quite natural); but when the Rabbit actually took a watch out of its 
                waistcoat-pocket, and looked at it, and then hurried on, Alice started to her feet, for it 
                flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, 
                or a watch to take out of it, and burning with curiosity, she ran across the field after it, and 
                was just in time to see it pop down a large rabbit-hole under the hedge.</p>
                <p>In another moment down went Alice after it, never once considering how in the world she was to 
                get out again.</p>
                <p>The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so 
                suddenly that Alice had not a moment to think about stopping herself before she found herself 
                falling down what seemed to be a very deep well.</p>
                <p>Either the well was very deep, or she fell very slowly, for she had plenty of time as she went 
                down to look about her, and to wonder what was going to happen next. First, she tried to look 
                down and make out what she was coming to, but it was too dark to see anything; then she looked 
                at the sides of the well, and noticed that they were filled with cupboards and book-shelves: 
                here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the 
                shelves as she passed; it was labelled "ORANGE MARMALADE," but to her great disappointment it 
                was empty: she did not like to drop the jar for fear of killing somebody underneath, so managed 
                to put it into one of the cupboards as she fell past it.</p>
                <p>"Well!" thought Alice to herself. "After such a fall as this, I shall think nothing of tumbling 
                down stairs! How brave they'll all think me at home! Why, I wouldn't say anything about it, even 
                if I fell off the top of the house!" (Which was very likely true.)</p>
                <p>Down, down, down. Would the fall never come to an end? "I wonder how many miles I've fallen by 
                this time?" she said aloud. "I must be getting somewhere near the centre of the earth. Let me 
                see: that would be four thousand miles down. I think-" (for, you see, Alice had learnt several 
                things of this sort in her lessons in the schoolroom, and though this was not a very good 
                opportunity for showing off her knowledge, as there was no one to listen to her, still it was 
                good practice to say it over) "-yes, that's about the right distance-but then I wonder what 
                Latitude or Longitude I've got to?" (Alice had no idea what Latitude was, or Longitude either,
                but thought they were nice grand words to say.)</p>
            </div>
        ),
        text3: (
            <p>
                While being recorded, please read this passage: <br />
                "Forests are the lungs of our Earth. Preserving them is crucial for
                biodiversity and combating climate change."
            </p>
        ),
    };

    // Select the text based on the choice
    const textContent = texts[textChoice] || (
        <p>Please select a valid reading from the previous page.</p>
    );

    const readingPassage = (
        <div className="content-container">
            {textContent}
        </div>
    )

    const pageTitle = "Reading Page"

    const nextPage = "/watch-video"


    return (
        <VideoRecorder 
            pageTitle={pageTitle} 
            content={readingPassage} 
            nextPage={nextPage} 
        />
    );
};

export default ReadingPage;
