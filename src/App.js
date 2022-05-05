import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProtectedPages from './pages/ProtectedPages';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' />
          <Route element={<ProtectedPages />} >
            <Route path='/pokedex' />
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
