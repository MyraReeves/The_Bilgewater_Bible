// This file uses the characters ("pirate-info") collection database inside my Firebase app to display information about each requested character's information onto the screen (via an id prop that is passed in).
import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import database from './db';
import { doc, getDoc } from "firebase/firestore";

function BlackSailsCharacters({characterID}) {
  const [character, setCharacter] = useState({})
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect( () => {
    const getData = async () => {
      try {
        const docRef = doc(database, "pirate-info", characterID);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCharacter(docSnap.data())
        } else {
          console.log("No such document!");
        }
      }
      catch (error) {
          console.log('%cThe following error occured when attempting to fetch data from the API: \n', 'color: red; font-weight: bold; font-size: larger', error);
          setHasError(true);
        }
      finally {
        setLoading(false)
      }
    } 
    getData()

  }, [characterID])

  if (hasError) {
    return <div className="error">⛔ An error occurred.  Sorry! ⛔ <br/>Please check the console for further details.</div>;
  }
  if (loading) {
      return <div className="loading">Loading character information...</div>
  }

  // Pirates should return slightly different, longer text than other characters.  If !pirate return
  // "{name} is a fictitious character created for the show. {Pronoun} is {height} {nationality} {gender} with {hair} hair and {eyes} eyes."
  if (!character.pirate){
    return <div className="with-photo">
      <img src={character.image} alt={character.altText}/>
      <h1 className="underline">{character.name}</h1>
      <p>{character.name} is a fictitious character created for the tv show. {character.pronoun} is a {character.height} tall {character.nationality} {character.gender} {character.city}. {character.pronoun} has {character.hair} hair and {character.eyes} eyes.</p>
      <p> {character.additionalInfo} </p>
    </div>
  }

  // The one exception would be Woodes Rogers, who was neither ficitious nor a pirate on the show:
  if (character.firstName == 'Woodes'){
    return     <div>
    <div className="with-photo">
      <img src={character.image} alt={character.altText}/>
      <h1 className="underline">{character.name}</h1>
      <p> 
        {character.name} is a {character.height} tall {character.nationality} {character.gender} with {character.hair} hair and {character.eyes} eyes from {character.city}. 
      </p>
      <p>
      {character.firstName} is... {character.inOtherSources[0]} 
      </p>
      <p> {character.additionalInfo} </p>
    </div>
    <div className="underneath-photo">
      <h4><span className="underline">{character.realOrFiction}</span>:</h4>
      <p className="indent"> {character.inOtherSources[0]} </p>
      <p className="indent"> {character.inOtherSources[1]} </p>
      <p className="indent"> {character.inOtherSources[2]} </p>
    </div>
  </div>
  }


  return (
    <div>
      <div className="with-photo">
        <img src={character.image} alt={character.altText}/>
        <h1 className="underline">{character.name}</h1>
        <p> 
          {character.name} is a {character.height} tall {character.nationality} {character.gender} with {character.hair} hair and {character.eyes} eyes from {character.city}. 
        </p>
        <p>
          {character.firstName} is {character.position} of the pirate ship {character.shipName}, which is {character.shipDescription}. 
        </p>
        <p> {character.additionalInfo} </p>
      </div>
      <div className="underneath-photo">
        <h4><span className="underline">{character.realOrFiction}</span>:</h4>
        <p className="indent"> {character.inOtherSources[0]} </p>
        <p className="indent"> {character.inOtherSources[1]} </p>
        <p className="indent"> {character.inOtherSources[2]} </p>
      </div>
    </div>
  )
}


BlackSailsCharacters.propTypes = {
  characterID: PropTypes.string.isRequired
}

export default BlackSailsCharacters
