import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:city/search" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
