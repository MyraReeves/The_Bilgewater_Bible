import { Link } from 'react-router-dom'

import ships from './images/ships1.jpg'

function CharacterList() {
      
  
    return (
        <main>
            <h1>☠️ <span className="underline">Characters</span> ☠️</h1>
            <div className="subheading">(In alphabetical order)</div>
            <img src={ships} alt='temporary placeholder image' />
            <br/><Link to='/'>	🏠︎ Return to Homepage 🏠︎</Link>
        </main>
    )
}

export default CharacterList