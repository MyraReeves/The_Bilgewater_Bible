// This files generates the info page for each character, based on the id in the url (which is set for each character inside the Firebase app's character collection API)

import {Link, useParams} from "react-router-dom";
import BlackSailsCharacters from "./BlackSailsCharacters";

function CharacterInfo() {

    const { id } = useParams();

    return (
        <>
            <div className='character-info'>
                <BlackSailsCharacters characterID = { id } />
                <br/><Link to='/characters'>	🕱 Return to Character Index 🕱</Link>
            </div>

        </>
    )
  }
  
  export default CharacterInfo
  