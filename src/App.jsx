import { HashRouter as Router, Routes, Route, Link } from "react-router-dom"

import './App.css'

// Import your components
import Homepage from "./Homepage"
import UserInfo from "./UserInfo"
import TextSelection from './TextSelection'
import ReadingPage from './Reading'
import WatchVideo from "./WatchVideo"
import ListeningPage from './Listening'
import CarrotGame from './CarrotGame'
import OSDIQuestionnaire from './OSDI'
import ReviewPage from './ReviewPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        {/* Define the routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/select-reading" element={<TextSelection />} />
        <Route path="/reading" element={<ReadingPage />} />
        <Route path="/watch-video" element={<WatchVideo />} />
        <Route path="/music" element={<ListeningPage />} />
        <Route
          path="/carrot-game"
          element={
            // <>
            //   <VideoRecorder pageTitle="Carrot Game Recording" />
              <CarrotGame />
            // </>
          }
        />
        <Route path="/osdi-questionnaire" element={<OSDIQuestionnaire />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
    </Router>
  )
}

export default App
