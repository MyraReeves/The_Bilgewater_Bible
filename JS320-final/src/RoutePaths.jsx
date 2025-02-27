import { Routes, Route } from 'react-router-dom'

import Homepage from './Homepage'
import CastAPI from './CastAPI'
import CharacterIndex from './CharacterList'
import TVMazeAPI from './TVMazeAPI'
import Podcast from './Podcast'
import LearnMore from './LearnMore'
import PageNotFound from './PageNotFound'

function RoutePaths() {

    /*  THIS APPEARS TO NOT BE NEEDED!!!!

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

    const FathomsDeep = () => {
        return <Podcast/> 
    } 

    const Learning = () => {
        return <LearnMore />
    }

    */


    return (
        <Routes>
          <Route path='/' element={ <Homepage/> } />
          <Route path='/stats' element={ <TVMazeAPI/> } />
          <Route path='/cast' element={ <CastAPI/> } />
          <Route path='/characters' element={ <CharacterIndex/> } />
          <Route path='/podcast' element={ <Podcast/> } />
          <Route path='/learn' element= { <LearnMore/> } />
          <Route path='*' element={ <PageNotFound/> } />
        </Routes>
    )
}

export default RoutePaths