// This file maps an array of objects given by the API, in order to generate a visual list on the screen of the characters in the show.

import { useEffect, useState } from "react"
// import { Link } from 'react-router-dom'

function CharacterList() {
    const [arrayOfcharacters, setArrayOfCharacters] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch('https://api.tvmaze.com/shows/182/cast')

            .then( response => response.json() )

            .then( objectArrayInsideResponse => {
                setArrayOfCharacters(objectArrayInsideResponse);
            })

            .catch( error => {
                console.log('%cThe following error occured when attempting to fetch data from the API: \n', 'color: red; font-weight: bold; font-size: larger', error);
                setHasError(true);
            })

            .finally( () => {
              setLoading(false)
            })

        }, []);


    if (hasError) {
        return <div className="error">⛔ An error occurred while fetching the information.  Sorry! ⛔ <br/>Please check the console for further details.</div>;
    }

    if (loading) {
        return <div className="loading">Loading information...</div>
    }

    if (arrayOfcharacters === null) {
        return <div className="loading">The API failed to return any data. <br/> Please try again later</div>;
    }

    // Sort the array into alphabetical order:
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
            <h1>☠️ <span className="underline">Characters</span> ☠️</h1>
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
        </main>
    )
}

export default CharacterList