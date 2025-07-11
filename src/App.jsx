import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import QRCodePage from "./pages/QRCodePage";
import ShortenURLPage from "./pages/ShortenURLPage";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-amber-100">
        <Navbar />
        <main className="px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qr-code" element={<QRCodePage />} />
            <Route path="/shorten-url" element={<ShortenURLPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
