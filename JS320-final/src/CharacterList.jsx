// This file maps an array of objects given by a Firebase collection ("characters"), in order to generate a clickable visual list of the characters in the tv show. When clicked on, each displayed character will take the user to an info page about that character.
import { useEffect, useState } from "react";
import database from './db';
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'

function CharacterList() {
    const [arrayOfcharacters, setArrayOfCharacters] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect( () => {

        const getData = async () => {
            try {
                // See Firestore Docs @ https://firebase.google.com/docs/firestore/query-data/get-data 
                const querySnapshot = await getDocs(collection(database, "characters"));
                setArrayOfCharacters(querySnapshot.docs)
            }
            catch {(error) => {
                    console.log('%cThe following error occured when attempting to fetch data from the API: \n', 'color: red; font-weight: bold; font-size: larger', error);
                    setHasError(true);
                }
            }
            finally {
                setLoading(false)
            }
        } 
        getData()
      
    }, [])


    if (hasError) {
        return <div className="error">⛔ An error occurred while fetching the information.  Sorry! ⛔ <br/>Please check the console for further details.</div>;
    }
    if (loading) {
        return <div className="loading">Loading information...</div>
    }

  
    return (
        <main style={{margin: '135px 0 10px 0'}}>
            <h1>🕱 <span className="underline">Main Characters</span> 🕱</h1><br/>
            <div className="centered">
                {arrayOfcharacters.map ( (eachCharacter) => {
                    return <div key={eachCharacter.id} className="character-list" onClick={() => navigate(eachCharacter.id)}>
                        <h2> {eachCharacter.data().indexName} </h2>
                        <img src = {eachCharacter.data().image} alt = {eachCharacter.data().altText} />
                    </div>
                })}
            </div>
        </main>
    )
}

export default CharacterList