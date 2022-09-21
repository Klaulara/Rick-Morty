import imageRickMorty from './img/rick-and-morty-rick.gif';
import './App.css';
import { useState } from "react";
import Characters from './components/Characters';


function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    let array =[]
    for (let i = 1; i < 827; i++) {
      const api = await fetch(`https://rickandmortyapi.com/api/character/${i}`)
      const characterApi = await api.json();
      array.push(characterApi);
    }
    setCharacters(array);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img src={imageRickMorty} alt='Rick & Morty' className='img-home' />
            <button onClick={reqApi} className='btn-search'>
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
