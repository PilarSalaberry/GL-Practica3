import './App.css';
import Cycle from './components/Cycle/Cycle';
import Dashboard from './components/Dashboard/Dashboard';
import PokeApi from './components/PokeApi/PokeApi';

function App() {
  return (
    <div className="App">
      {/* <Cycle /> */}
      <Dashboard />
      <PokeApi />
    </div>
  );
}

export default App;
