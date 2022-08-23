import { Routes, Route } from "react-router";
import "./App.css";

import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Admin from "./pages/Admin";
import Adminpanel from "./pages/Adminpanel";
import PastCommittee from "./pages/PastCommittee";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/past-committee" element={<PastCommittee />} />
        <Route exact path="/fot-admin" element={<Admin />} />
        <Route exact path="/fot-admin/adminpanel" element={<Adminpanel />} />
      </Routes>
    </div>
  );
}

export default App;
