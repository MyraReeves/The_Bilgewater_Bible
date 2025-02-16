import { Routes, Route, Link } from 'react-router-dom'

import Homepage from './Homepage'
import CharacterIndex from './CharacterList'
import TVMazeAPI from './TVMazeAPI'

function RoutePaths() {

    const Home = () => {
      return <Homepage/>
    }

    const Characters = () => {
        return <CharacterIndex/>
    }

    const Stats = () => {
        return <TVMazeAPI/>
    }


    return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/stats' element={<Stats />} />
        </Routes>
    )
}

export default RoutePaths