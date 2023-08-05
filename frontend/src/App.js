import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div classname="background">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </BrowserRouter>
    // </div>
  );
}

export default App;
