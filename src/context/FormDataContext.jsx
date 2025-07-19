// context/FormDataContext.js
import { createContext, useState, useContext } from "react";

const FormDataContext = createContext();

export const useFormData = () => useContext(FormDataContext);

export const FormDataProvider = ({ children }) => {
  const [metadata, setMetadata] = useState({});
  const [osdiResults, setOsdiResults] = useState({})
  const [videos, setVideos] = useState({}); // key: page identifier, value: Blob

  return (
    <FormDataContext.Provider value={{ metadata, setMetadata, videos, setVideos, osdiResults, setOsdiResults }}>
      {children}
    </FormDataContext.Provider>
  );
};
