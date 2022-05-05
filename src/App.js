import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProtectedPages from './pages/ProtectedPages';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route element={<ProtectedPages />} >
            <Route path='/pokedex' element={<h1>Este es mi pokedex</h1>} />
            <Route path='/pokedex/:id' />
            <Route path='/pokedex/:id/encounters' />
          </Route>
          <Route path='/settings' />
        </Routes>
      </header>
    </div>
  );
}

export default App;
