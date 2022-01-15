import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from './pages/main.js';
import GinCocktails from './pages/ginCocktails.js';
import VodkaCocktails from './pages/vodkaCocktails.js';
import RumCocktails from './pages/rumCocktails.js';
import ScotchCocktails from './pages/scotchCocktails.js';
import NonalcoholicCocktails from './pages/nonalcoholicCocktails.js';
import Random from './pages/random.js';
import CocktailDetails from './pages/cocktailDetails.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/gin-cocktails" element={<GinCocktails/>}/>
          <Route path="/vodka-cocktails" element={<VodkaCocktails/>}/>
          <Route path="/rum-cocktails" element={<RumCocktails/>}/>
          <Route path="/scotch-cocktails" element={<ScotchCocktails/>}/>
          <Route path="/nonalcholic-cocktails" element={<NonalcoholicCocktails/>}/>
          <Route path="/random" element={<Random/>}/>
          <Route path="/cocktail-details" element={<CocktailDetails/>}/> 
        </Routes>
      </Router>

    </div>
  );
}

export default App;
