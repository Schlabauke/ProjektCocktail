import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/main'
import Cocktails from './pages/cocktails'
import CocktailDetail from './pages/cocktailDetails'

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cocktails' element={<Cocktails />} />
          <Route path='/cocktail-details' element={<CocktailDetail />} />
          <Route />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
