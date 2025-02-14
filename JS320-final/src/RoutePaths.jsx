import { Routes, Route, Link } from 'react-router-dom'

import Homepage from './Homepage'
import CharacterIndex from './CharacterList'

function RoutePaths() {

    const Home = () => {
      return <Homepage/>
    }

    const Characters = () => {
        return <CharacterIndex/>
      }


    return (
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/characters' element={<Characters />}/>
        </Routes>
    )
}

export default RoutePaths