import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/car-rental-react" element={<Homepage />} />
          <Route
            path="/car-rental-react/:city/search"
            element={<SearchResults />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
