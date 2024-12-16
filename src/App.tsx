import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnalyzeForm from './pages/AnalyzeForm';
import Home from './pages/home';
import AllShopsAnalysis from './pages/AllShopsAnalysis';
import ShopAnalysis from './pages/ShopAnalysis';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyze-form" element={<AnalyzeForm />} />
        <Route path="/all-shops-analysis" element={<AllShopsAnalysis />} />
        <Route path="/shop-analysis" element={<ShopAnalysis />} />
      </Routes>
    </Router>
  );
}

export default App;
