// This file maps an array of objects given by the API, in order to generate a visual list on the screen of the characters in the show.

import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

import ships from './images/ships1.jpg'

function CharacterList() {
    const [arrayOfcharacters, setArrayOfCharacters] = useState([]);
    const [hasError, setHasError] = useState(false);                    // NOTE: Since this is repeated in more than one file, it should be changed into a prop

    useEffect( () => {
        fetch('https://api.tvmaze.com/shows/182/cast')

            .then( response => response.json() )

            .then( objectArrayInsideResponse => {
                setArrayOfCharacters(objectArrayInsideResponse);
            })

            .catch( error => {
                console.log('%cThe following error occured when attempting to fetch data from the API: \n', 'color: red; font-weight: bold; font-size: larger', error);
                setHasError(true);
            });
        }, []);


    if (hasError) {
        return <div className="error">⛔ An error occurred while fetching the information.  Sorry! ⛔ <br/>Please check the console for further details.</div>;
    }

    if (arrayOfcharacters === null) {
        return <div className="loading">Loading information...</div>;
    }


    // Sort the array in alphabetical order of the actor names:
    arrayOfcharacters.sort(
        function(object1, object2) {
            if (object1.character.name < object2.character.name) {
                return -1;
            }
            if (object1.character.name > object2.character.name) {
                return 1;
            }
            else {
                return 0;
            }
        }
    );
      
  
    return (
        <main>
            <h1>☠️ <span className="underline">Main Characters</span> ☠️</h1>
            <div className="subheading">(In alphabetical order)</div>
            <div className="centered">
                {arrayOfcharacters.map( (eachCharacter, index) => (
                    <div key={index} className="character-list">
                        <h2> {eachCharacter.character.name} </h2>
                        <img src = {eachCharacter.character.image.medium} alt = 'Photo of the character'/> <br/>
                        <a href={eachCharacter.character.url} target="_blank" rel="noopener noreferrer">🔗 TV Maze description</a>
                    </div>
                ))
                }
            </div>

            <img src={ships} alt='temporary placeholder image' />
            <br/><Link to='/'>	🏠︎ Return to Homepage 🏠︎</Link>
        </main>
    )
}

export default CharacterList