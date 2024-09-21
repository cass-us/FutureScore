import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/Hero/NavBar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Mission from "./components/Mission/Mission";
import Career from "./components/Career/Career";
import FzDirect from "./components/FZ/FzDirect";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/career" element={<Career />} />
        <Route path="/fzDirect" element={<FzDirect />} />
        {/* Optional: A catch-all for undefined routes */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}
