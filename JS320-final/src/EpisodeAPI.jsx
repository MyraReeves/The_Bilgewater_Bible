// This file maps an array of objects given by the API, to display information about each episode.

import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function EpisodeList(props) {
    const {hasError, setHasError} = props;
    const [arrayOfEpisodes, setArrayOfEpisodes] = useState([]);

    useEffect( () => {
        fetch('https://api.tvmaze.com/shows/182/episodes')

            .then( response => response.json() )

            .then( objectArrayInsideResponse => {
                setArrayOfEpisodes(objectArrayInsideResponse);
            })

            .catch( error => {
                console.log('%cThe following error occured when attempting to fetch data from the API: \n', 'color: red; font-weight: bold; font-size: larger', error);
                setHasError(true);
            });
        }, []);


    if (hasError) {
        return <div className="error">⛔ An error occurred while fetching the information.  Sorry! ⛔ <br/>Please check the console for further details.</div>;
    }

    if (arrayOfEpisodes === null) {
        return <div className="loading">Loading information...</div>;
    }
      
  
    return (
        <div className="episodes">
            <h1>Episode List</h1>
            <table>
                {arrayOfEpisodes.map( (eachEpisode, index) => (
                    <div key={index} className="episode-info">
                        <tr>
                            <td><h2>Episode {eachEpisode.name} </h2></td>
                        </tr>
                        <tr>
                            <td><img src = {eachEpisode.image.medium} alt = 'Marketing image for the episode'/></td>
                            <td><span className="floatRight">{eachEpisode.summary.slice(3, -4)}</span></td>
                        </tr>
                    </div>
                ))
                }
            </table>            
        </div>
    )
}

EpisodeList.propTypes = {
    hasError: PropTypes.bool,
    setHasError: PropTypes.func,
}

export default EpisodeList