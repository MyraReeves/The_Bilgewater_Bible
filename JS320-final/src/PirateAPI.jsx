import { useEffect, useState } from "react"


function PirateAPI() {
    const [pirateGreeting, setPirateGreeting] = useState(undefined)
    const [hasError, setHasError] = useState(false)

    useEffect( () => {
        fetch('https://pirate.monkeyness.com/api/insult')
          .then( response => response.json() )
          .then( string => {
            setPirateGreeting(string);
            console.log({pirateGreeting})
          }, error => {console.log(error)} )
          .catch( () => {
            setHasError(true);
          } )
    }, [] )

    if (hasError) {
        return ' '
    }

  return (
    <>
        <h2 className="greeting">Welcome! {pirateGreeting}</h2>
    </>
  )
}

export default PirateAPI