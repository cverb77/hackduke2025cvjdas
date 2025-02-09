import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import FormPage from "./pages/FormPage";
import About from "./pages/About"; 
import Mission from "./pages/Mission";
import ThankYou from "./pages/ThankYou"

function App() {
  return (
    <Router>
      <div className="relative h-screen w-screen">
        <Nav />
        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contribute" element={<FormPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
