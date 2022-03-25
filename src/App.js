import React from 'react';
import Character from './components/Character.js'
import {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    console.log('hi');
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        console.log(res);
        setCharacters(res.data);
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map(character => {
        return <Character character={character} characterName={character.name}/>
      })  
      }
    </div>
  );
}

export default App;
