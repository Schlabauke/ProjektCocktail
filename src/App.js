// General Imports
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Import Components 
import GetId from './components/GetId.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

// Import Pages
import Main from './pages/main.js';
import Random from './pages/recipePages/random.js';
import GinCocktails from './pages/incredientPages/ginCocktails.js';
import RumCocktails from './pages/incredientPages/rumCocktails.js';
import VodkaCocktails from './pages/incredientPages/vodkaCocktails.js';
import ScotchCocktails from './pages/incredientPages/scotchCocktails.js';
import NonalcoholicCocktails from './pages/incredientPages/nonalcoholicCocktails.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/gin_cocktails" element={<GinCocktails />} />
          <Route path="/gin_cocktails/:id" element={<GetId />} />
          <Route path="/vodka_cocktails" element={<VodkaCocktails />} />
          <Route path="/vodka_cocktails/:id" element={<GetId />} />
          <Route path="/rum_cocktails" element={<RumCocktails />} />
          <Route path="/rum_cocktails/:id" element={<GetId />} />
          <Route path="/scotch_cocktails" element={<ScotchCocktails />} />
          <Route path="/scotch_cocktails/:id" element={<GetId />} />
          <Route path="/nonalcholic_cocktails" element={<NonalcoholicCocktails />} />
          <Route path="/nonalcholic_cocktails/:id" element={<GetId />} />
          <Route path="/random" element={<Random />} />
          <Route path="/recipe/:id" element={<GetId />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

