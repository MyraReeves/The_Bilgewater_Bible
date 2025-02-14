import { Routes, Route, Link } from 'react-router-dom'

import Homepage from './Homepage'

function RoutePaths() {

    const Home = () => {
      return <Homepage/>
    }


    return (
        <Routes>
          <Route path='/' element={<Home />}/>

        </Routes>
    )
}

export default RoutePaths