// This file maps an array of objects given by the API, to display information about each episode.

import { useEffect, useState } from "react";

function EpisodeList() {
    const [arrayOfEpisodes, setArrayOfEpisodes] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch('https://api.tvmaze.com/shows/182/episodes')

            .then( response => response.json() )

            .then( objectArrayInsideResponse => {
                setArrayOfEpisodes(objectArrayInsideResponse);
            })

            .catch( error => {
                console.log('%cThe following error occured when attempting to fetch data from the API: \n', 'color: red; font-weight: bold; font-size: larger', error);
                setHasError(true);
            })

            .finally( () => {
              setLoading(false)
            })

        }, []);


    if (hasError) {
        return <div className="error">⛔ An error occurred while fetching the information.  Sorry! ⛔ <br/>Please check the console for further details.</div>;
    }


    if (loading) {
        return <div className="loading">Loading information...</div>
    }

    if (arrayOfEpisodes === null) {
        return <div className="loading">The API failed to return any data. <br/> Please try again later</div>;
    }

    // Deletes the internal <p> tags (between "forever." and "Series") inside of the final episode's summary and re-orders wording:
    arrayOfEpisodes[37].summary = "<p>Series Finale:  Flint makes one last push to topple England. Silver seals his fate. Rackham confronts Rogers. Nassau is changed forever.</p>"

  
    return (
        <div className="episodes">
            <h1>Episode List</h1>
                {arrayOfEpisodes.map( (eachEpisode, index) => (
                    <div key={index} className="episode-info">
                        <table>
                            <tbody>
                                <tr>
                                    <td><h2>Episode {eachEpisode.name} </h2></td>
                                </tr>
                                <tr>
                                    <td><img src = {eachEpisode.image.medium} alt = 'Marketing image for the episode'/></td>
                                    <td><span className="floatRight">{eachEpisode.summary.slice(3, -4)}</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))
                }
        </div>
    )
}

export default EpisodeList