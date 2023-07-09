import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Continents from "./pages/Continents/Continents";
import Country from "./pages/Country/Country";
import Destination from "./pages/Destination/Destination";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <div className="App">
      <NavLink to="/">Home</NavLink>
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="/continent/:country" element={<Country />} />
        <Route path="/country/:destinationId" element={<Destination />} />
        <Route path="/destination/:placeId" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
