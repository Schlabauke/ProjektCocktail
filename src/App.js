import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from './pages/main.js';
import GinCocktails from './pages/ginCocktails.js';
import VodkaCocktails from './pages/vodkaCocktails.js';
import RumCocktails from './pages/rumCocktails.js';
import ScotchCocktails from './pages/scotchCocktails.js';
import NonalcoholicCocktails from './pages/nonalcoholicCocktails.js';
import Random from './pages/random.js';
//import CocktailDetails from './pages/cocktailDetails.js';
import GetId from './components/GetId.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/gin_cocktails" element={<GinCocktails/>}/>
          <Route path="/gin_cocktails/:id" element={<GetId/>}/>
          <Route path="/vodka_cocktails" element={<VodkaCocktails/>}/>
          <Route path="/vodka_cocktails/:id" element={<GetId/>}/>
          <Route path="/rum_cocktails" element={<RumCocktails/>}/>
          <Route path="/rum_cocktails/:id" element={<GetId/>}/>
          <Route path="/scotch_cocktails" element={<ScotchCocktails/>}/>
          <Route path="/scotch_cocktails/:id" element={<GetId/>}/>
          <Route path="/nonalcholic_cocktails" element={<NonalcoholicCocktails/>}/>
          <Route path="/nonalcholic_cocktails/:id" element={<GetId/>}/>
          <Route path="/random" element={<Random/>}/>
          
          <Route path="/recipe/:id" element={<GetId/>}/> 
        </Routes>
      </Router>

    </div>
  );
}

export default App;

//<Route path="/cocktail_details" element={<CocktailDetails/>}/> 
