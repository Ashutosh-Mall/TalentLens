import Navbar from "./components/Navbar";
import Scroll from "./components/Scroll";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <div className="min-h-screen bg-white bg-[radial-gradient(circle,#e5e7eb_1px,transparent_1px)] bg-[size:18px_18px]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/scroll" element={<Scroll />} />
      </Routes>
    </div>
  );
}
