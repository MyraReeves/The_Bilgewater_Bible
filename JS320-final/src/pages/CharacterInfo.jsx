// This files generates the info page for each character, based on the id in the url (which was set for each character inside the Firebase app's character collection API)

import {Link, useParams} from "react-router-dom";
import BlackSailsCharacters from "../page_components/BlackSailsCharacters";

function CharacterInfo() {

    const { id } = useParams();

    return (
        <main>
            <div className='character-info'>
                <BlackSailsCharacters characterID = { id } /><br/>
                <div className="centered">
                    <Link to='/characters'>🕱 Return to Character Index 🕱</Link>
                </div>
            </div>

        </main>
    )
  }
  
  export default CharacterInfo
  