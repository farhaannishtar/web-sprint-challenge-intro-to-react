// Write your Character component here
import React from 'react';
import styled, { keyframes } from "styled-components";


const Character = (props) => {

  const StyledCharacter = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 2px solid white;
  `;


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const {character, characterBirthYear} = props;

  return (
    <StyledCharacter>
      <h1>{character.name}</h1>
      <h1>{characterBirthYear}</h1>
    </StyledCharacter>
  );
}

export default Character;
