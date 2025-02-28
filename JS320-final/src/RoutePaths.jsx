import { Routes, Route } from 'react-router-dom';

import Homepage from './Homepage';
import CastAPI from './CastAPI';
import CharacterIndex from './CharacterList';
import TVMazeAPI from './TVMazeAPI';
import Podcast from './Podcast';
import LearnMore from './LearnMore';
import PageNotFound from './PageNotFound';

function RoutePaths() {


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