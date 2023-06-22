import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import DetailPagePoke from "./Pages/DetailPagePoke";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index exact path="/" element={<HomePage />} />
        <Route path="/pokeDetail" element={<DetailPagePoke />} />
      </Routes>
    </Router>
  );
}
