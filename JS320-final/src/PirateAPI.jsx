
// import { useEffect, useState } from "react"


function PirateAPI() {
    // const [pirateGreeting, setPirateGreeting] = useState(undefined)
    // const [hasError, setHasError] = useState(false)

    // useEffect( () => {
    //     fetch('https://api.tvmaze.com/shows/182')
    //       .then( response => response.json() )
    //       .then( string => {
    //         setPirateGreeting(string);
    //         console.log(string);
    //         console.log({pirateGreeting});
    //         const object = string;
    //         console.log(object)
    //         console.log(object.language)
    //         return object;
    //       }, error => {console.log(error)} )
    //       .catch( () => {
    //         setHasError(true);
    //       } )
    //       .finally( () => {
    //         return pirateGreeting
    //       }
    //       )
    // }, [] )

    // console.log(pirateGreeting.ended)

    // if (hasError) {
    //     return ' '
    // }

  return (
    <div className="greeting">
        <h2>Welcome to Governor Augustus Featherstone's Complete and Accurate, Totally Fictional <br/>Journal of Who's Who in Nassau Town Circa 1715.</h2> 
        <p>Here-in lies an account of flibustiers, buccaneers, freebooters, maroons, privateers, and the occassional jungaless. <br/> Dis ting go with sense and keep yer wits about ye. For there is no peace beyond the line!</p>
    </div>
  )
}

export default PirateAPI