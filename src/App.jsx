import { HashRouter as Router, Routes, Route, Link } from "react-router-dom"

import './App.css'

// Import your components
import Homepage from "./Homepage"
import UserInfo from "./UserInfo"
import EnvInfo from './EnvInfo'
import TextSelection from './TextSelection'
import ReadingPage from './Reading'
import WatchVideo from "./WatchVideo"
import ListeningPage from './Listening'
import CarrotGame from './CarrotGame'
import OSDIQuestionnaire from './OSDI'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        {/* Define the routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/environment-info" element={<EnvInfo />} />
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
      </Routes>
    </Router>
  )
}

export default App
