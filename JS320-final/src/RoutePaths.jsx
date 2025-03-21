import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import CastAPI from './pages/CastAPI';
import CharacterIndex from './pages/CharacterList';
import Stats from './pages/Stats';
import Podcast from './pages/Podcast';
import LearnMore from './pages/LearnMore';
import PageNotFound from './pages/PageNotFound';
import CharacterInfo from './pages/CharacterInfo';

function RoutePaths() {


    return (
        <Routes>
          <Route path='/' element={ <Homepage/> } />
          <Route path='/stats' element={ <Stats/> } />
          <Route path='/cast' element={ <CastAPI/> } />
          <Route path='/characters' element={ <CharacterIndex/> } />
          <Route path='/characters/:id' element={ <CharacterInfo/> } />
          <Route path='/podcast' element={ <Podcast/> } />
          <Route path='/learn' element= { <LearnMore/> } />
          <Route path='*' element={ <PageNotFound/> } />
        </Routes>
    )
}

export default RoutePaths