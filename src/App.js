import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs/add" element={<Add />} />
        <Route path="/jobs/edit/:jobId" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
