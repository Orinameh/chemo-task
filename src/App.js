import { Route, Routes } from "react-router-dom";
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Albums />} />
      <Route path="/albums/:id/:title/:owner" element={<Photos />} />
    </Routes>
  );
}

export default App;
