// This file uses the characters collection database inside my Firebase app to display information about the pirate characters onto the screen.

import database from './db';
import { collection, getDocs } from "firebase/firestore";
import { Link } from 'react-router-dom';


function BlackSailsCharacters() {


  // Pirates should return slightly different, longer text than other characters.  If !pirate return
  // "{name} is a fictitious character created for the show. {Pronoun} is {height} {nationality} {gender} with {hair} hair and {eyes} eyes."

  return (
    <main>
      {/* 
      <h1> {name} </h1>
      <p> {name} is {position} of the pirate ship {shipName}, which is {shipDescription}. </p> 
      <p> {firstName} is a {height} tall {nationality} {gender} with {hair} hair and {eyes} eyes from {city}. </p>
      <p> {additionalInfo} </p>

      <span className="underline">{realOrFiction}</span>:
      <p> {inOtherSources[0]} </p>
      <p> {inOtherSources[1]} </p>
      <p> {inOtherSources[2]} </p>
      */}
    </main>
  )
}

export default BlackSailsCharacters
