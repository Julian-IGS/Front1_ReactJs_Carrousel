import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pokedex from './component/Pokedex';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;