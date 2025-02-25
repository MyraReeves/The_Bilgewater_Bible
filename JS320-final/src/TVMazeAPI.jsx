// This file uses the TVMaze API to display the official show description (season 1) and statistics about the show.

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

function TVMazeAPI() {
    const [object, setObject] = useState(null);
    const [hasError, setHasError] = useState(false);

    useEffect( () => {
        fetch('https://api.tvmaze.com/shows/182')
            .then( response => response.json() )

            .then(data => {
                setObject(data);
            })

            .catch( error => {
                console.log('%cThe following error occured when attempting to fetch data from the API: \n', 'color: red; font-weight: bold; font-size: larger', error);
                setHasError(true);
            });
        }, []);


    if (hasError) {
        return <div className="error">⛔ An error occurred while fetching the information.  Sorry! ⛔ <br/>Please check the console for further details.</div>;
    }

    if (object === null) {
        return <div className="loading">Loading information...</div>;
    }

    const summaryFirstParagraph = object.summary.slice(3, 34);
    const summarySecondParagraph = object.summary.slice(35, 170);
    const summaryThirdParagraph = object.summary.slice(177, 426);
    const summaryFourthParagraph = object.summary.slice(433, -4); 

    const genre1 = object.genres.slice(0, 1);
    const genre2 = object.genres.slice(1, 2);
    const genre3 = object.genres.slice(2);

  return (
    <main>
        <div className="show-stats">
        
            <div className="summary">
            <p>
                {summaryFirstParagraph} <br/>
                {summarySecondParagraph} <br/>
                {summaryThirdParagraph} {summaryFourthParagraph}
            </p>

            </div>

            <img src={object.image.medium} alt='Season 4 official teaser poster for Black Sails' />
            <table>
                <tr>
                    <td>Genre:</td>
                    <td>{genre2}, {genre3}, {genre1}</td>
                </tr>

                <tr>
                    <td>Network:</td>
                    <td>{object.network.name}</td>
                </tr>

                <tr>
                    <td>Filmed in:</td>
                    <td>Cape Town, South Africa</td>
                </tr>

                <tr>
                    <td>Premiered on:</td>
                    <td>{object.premiered}</td>
                </tr>

                <tr>
                    <td>Aired on:</td>
                    <td>{object.schedule.days}s</td>
                </tr>

                <tr>
                    <td>Average length of each episode:</td>
                    <td>{object.averageRuntime} minutes</td>
                </tr>

                <tr>
                    <td>Final episode:</td>
                    <td>{object.ended}</td>
                </tr>

                <tr>
                    <td>Official website:</td>
                    <td><Link to={object.officialSite}>{object.officialSite}</Link></td>
                </tr>
            </table>

            <div className="additional-links">
                <h4>Additional Links:</h4>
                <p>🎦 &nbsp; IMDB page: <Link to='https://www.imdb.com/title/tt2375692/'>https://www.imdb.com/title/{object.externals.imdb}</Link></p>
            </div>

            <div className="ratings">
                <h2>Ratings</h2>

                <h3>Season 1</h3>
                <p className='IMDB-rating'>
                    Average User Rating on IMDB: 8 out of 10 stars <br/>
                    Audience Rating on Rotten Tomatoes: 79% <br/>
                    Critics Reviews: 65%
                </p>
                
                <h3>Season 2</h3>
                <p className='IMDB-rating'>
                    Average User Rating on IMDB: 8.5 out of 10 stars <br/>
                    Audience Rating on Rotten Tomatoes: 90% <br/>
                    Critics Reviews: 100%
                </p>

                <h3>Season 3</h3>
                <p className='IMDB-rating'>
                    Average User Rating on IMDB: 9 out of 10 stars <br/>
                    Audience Rating on Rotten Tomatoes: 86% <br/> 
                    Critics Reviews: 80%
                </p>

                <h3>Season 4</h3>
                <p className='IMDB-rating'>
                    Average User Rating on IMDB: 8.5 out of 10 stars <br/>
                    Audience Rating on Rotten Tomatoes: 78% <br/>
                    Critics Reviews: 80%
                </p>
            </div>
        
        </div>
    </main>
  )
}

export default TVMazeAPI