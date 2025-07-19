import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RecordingProvider } from "./context/RecordingContext.jsx";
import { FormDataProvider } from "./context/FormDataContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormDataProvider>
      <RecordingProvider>
        <App />
      </RecordingProvider>
    </FormDataProvider>
  </StrictMode>
)
