import { useState } from 'react';
import './App.css';
import RoutePaths from './RoutePaths';
import Header from './Header'


function App() {
  const [hasError, setHasError] = useState(false);

  return (
    <>
      <Header />
      <RoutePaths 
        hasError={hasError} 
        setHasError={setHasError}
      />
    </>
  )
}

export default App
