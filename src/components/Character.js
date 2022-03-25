// Write your Character component here
import React from 'react';

const Character = (props) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const {character} = props;

  return (
    <div>
      <h1>{character.name}</h1>
    </div>
  );
}

export default Character;
