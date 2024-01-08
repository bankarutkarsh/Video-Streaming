import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./components/Homepage"
import Main from "./components/Main";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Homepage/>} />
        <Route path = "/Details" element={<Details/>} />
        <Route path = "/Main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
