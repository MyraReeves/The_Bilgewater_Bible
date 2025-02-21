import { Routes, Route } from 'react-router-dom'

import Homepage from './Homepage'
import CastAPI from './CastAPI'
import CharacterIndex from './CharacterList'
import TVMazeAPI from './TVMazeAPI'
import Postcast from './Podcast'

function RoutePaths() {

    const Home = () => {
      return <Homepage/>
    }

    const Stats = () => {
        return <TVMazeAPI/>
    }

    const Cast = () => {
        return <CastAPI/>
    }

    const Characters = () => {
        return <CharacterIndex/>
    }

    const FathomsDeep= () => {
        return <Postcast/> 
    } 


    return (
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/stats' element={ <Stats/> } />
          <Route path='/cast' element={ <Cast/> } />
          <Route path='/characters' element={ <Characters/> } />
          <Route path='/podcast' element={ <FathomsDeep/> } />
        </Routes>
    )
}

export default RoutePaths