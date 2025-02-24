// This file 

import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

import ships from './images/ships1.jpg'
import NassauMap from './images/Bahamas.jpg'

function LearnMore() {
    const [arrayOfBahamasFacts, setArrayOfBahamasFacts] = useState([]);
    const [hasError, setHasError] = useState(false);                    // NOTE: Since this is repeated in more than one file, it should be changed into a prop

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/name/Bahamas?fullText=true')

            .then( response => response.json() )

            .then( objectArrayInsideResponse => {
                setArrayOfBahamasFacts(objectArrayInsideResponse);
            })

            .catch( error => {
                console.log('%cThe following error occured when attempting to fetch data from the API: \n', 'color: red; font-weight: bold; font-size: larger', error);
                setHasError(true);
            });
        }, []);


    if (hasError) {
        return <div className="error">⛔ An error occurred while fetching the information.  Sorry! ⛔ <br/>Please check the console for further details.</div>;
    }

    if (arrayOfBahamasFacts === null) {
        return <div className="loading">Loading information...</div>;
    }


  
    return (
        <main>
            <div>
                {arrayOfBahamasFacts.map( (eachFact, index) => (
                    <div key={index}>
                        <h2> {eachFact.name.official} </h2>
                        <img src = {eachFact.flags.png} alt = {eachFact.flags.alt} className="flag"/> <img src = {eachFact.coatOfArms.png} alt = 'The Bahamian coat of arms consists of a marlin and flamingo supporting a shield on which there is a ship sailing underneath the sun. Above the shield is a conch shell, and beneath the shield is the national motto.' className="flag"/> <br/>
                        <table>
                            <tbody>
                            <tr>
                                <td>Currency:</td>
                                <td>{eachFact.currencies.BSD.name}, {eachFact.currencies.USD.name}</td>
                            </tr>
                            <tr>
                                <td>Total Area:</td>
                                <td>{eachFact.area} square kilometers</td>
                            </tr>
                            <tr>
                                <td>Population Size:</td>
                                <td>{eachFact.population}</td>
                            </tr>
                            <tr>
                                <td>Official language:</td>
                                <td>{eachFact.languages.eng}</td>
                            </tr>
                            <tr>
                                <td>Capital:</td>
                                <td>{eachFact.capital}</td>
                            </tr>
                            <tr>
                                <td>Global Coordinates of Nassau:</td>
                                <td>{eachFact.capitalInfo.latlng[0]} north of the equator, {eachFact.capitalInfo.latlng[1]} west of the prime meridian</td>
                            </tr>
                            <tr>
                                <td>Time Zone:</td>
                                <td>{eachFact.timezones}</td>
                            </tr>
                            </tbody>
                        </table>
                        <img src = {NassauMap} alt = 'Map of the Bahama islands'/>
                    </div>
                ))
                }
            </div>

            <img src={ships} alt='temporary placeholder image' />
        </main>
    )
}

export default LearnMore