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
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
