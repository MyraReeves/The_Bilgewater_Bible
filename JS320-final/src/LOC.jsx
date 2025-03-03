// This file uses the Library of Congress API to display historical documents (books, images, etc.) onto the screen
import { useEffect, useState } from "react";
import PropTypes from "prop-types"

function LibraryOfCongressAPI({referenceURL}) {
    const [historicalDocument, setHistoricalDocument] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch(`https://www.loc.gov/${referenceURL}&fo=json`)

            .then( response => response.json() )

            .then( objectArrayInsideResponse => {
                setHistoricalDocument(objectArrayInsideResponse);
            })

            .catch( error => {
                console.log('%cThe following error occured when attempting to fetch data from the API: \n', 'color: red; font-weight: bold; font-size: larger', error);
                setHasError(true);
            })

            .finally( () => {
              setLoading(false)
            })

        }, [referenceURL]);


    if (hasError) {
        return <div className="error">⛔ An error occurred while fetching the information.  Sorry! ⛔ <br/>Please check the console for further details.</div>;
    }

    if (loading) {
        return <div className="loading">Loading information...</div>
    }

    if (historicalDocument === null) {
        return <div className="loading">The API failed to return any data. <br/> Please try again later</div>;
    }

    console.log(historicalDocument)

  return (
    <div className="library-of-congress-scans">
        <p>Courtesy of the <a href={historicalDocument.item.aka[1]} target="_blank" rel="noopener noreferrer">U.S. Library of Congress</a></p>
        <img src={historicalDocument.item.image_url[0]} alt="Title page of the book"/>
        {/* {historicalDocument.map( (eachFact, index) => (
            <div key={index} className="Bahamas-facts">
                <h2> {eachFact.name.official} </h2>
                <img src = {eachFact.flags.png} alt = {eachFact.flags.alt} className="flag"/> &emsp; &emsp; <img src = {eachFact.coatOfArms.png} alt = 'The Bahamian coat of arms consists of a marlin and flamingo supporting a shield on which there is a ship sailing underneath the sun. Above the shield is a conch shell, and beneath the shield is the national motto.' className="flag"/> <br/>
                <table>
                    <tbody className="table-align-left">
                    <tr>
                        <td className="teal">Currency:</td>
                        <td className="teal">{eachFact.currencies.BSD.name} & {eachFact.currencies.USD.name}</td>
                    </tr>
                    <tr>
                        <td className="teal">Time Zone:</td>
                        <td className="teal">{eachFact.timezones}</td>
                    </tr>
                    <tr>
                        <td className="yellow">Population Size as of 2020:</td>
                        <td className="yellow">{eachFact.population}</td>
                    </tr>
                    <tr>
                        <td className="yellow">Official language:</td>
                        <td className="yellow">{eachFact.languages.eng}</td>
                    </tr>
                    <tr>
                        <td className="teal">Capital:</td>
                        <td className="teal">{eachFact.capital}</td>
                    </tr>
                    <tr>
                        <td className="teal">Global Coordinates of Nassau:</td>
                        <td className="teal">{eachFact.capitalInfo.latlng[0]} north of the equator, {eachFact.capitalInfo.latlng[1]} west of the prime meridian</td>
                    </tr>
                    <tr>
                        <td className="yellow">Total Area (including water):</td>
                        <td className="yellow">{eachFact.area} square kilometers</td>
                    </tr>
                    </tbody>
                </table>
                <img src = {NassauMap} alt = 'Map of the Bahama islands'/>
            </div>
        ))
        } */}
    </div>
  )
}

LibraryOfCongressAPI.propTypes = {
    referenceURL: PropTypes.string.isRequired
}

export default LibraryOfCongressAPI
