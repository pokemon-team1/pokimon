import logo from './logo.svg';
import './App.css';
import pokemonData from './Data.js'
import Liste from './Liste.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div className="row">
         <div className="col-md-4">
          <div><h5><em><Liste data={pokemonData}/></em> Liste des pokemons</h5></div>
         </div>
        </div>

      </header>
    </div>
    
  );
}

export default App;
