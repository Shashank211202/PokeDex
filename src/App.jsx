import { Route, Routes } from 'react-router-dom';
import './App.css'
import Pokedex from './components/Pokedex/Pokedex';
import PokeMonDetails from './components/PokemonDetails/PokemonDetails';

function App() {
  return (
    <div>
   
     <Routes> 
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<PokeMonDetails />} />
        <Route path="*" element={<h1>Not Found</h1>} />
     </Routes>
    </div>
  );
}

export default App;
