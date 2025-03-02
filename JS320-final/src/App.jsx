import { useState } from 'react';
import './App.css';
import RoutePaths from './RoutePaths';
import Header from './Header'
import Footer from './Footer'


function App() {
  const [hasError, setHasError] = useState(false);

  return (
    <body>
      <Header />
      <RoutePaths 
        hasError={hasError} 
        setHasError={setHasError}
      />
      <Footer />
      
    </body>
  )
}

export default App
