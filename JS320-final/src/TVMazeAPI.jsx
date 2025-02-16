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
                console.log('The following error occured while fetching data: \n', error);
                setHasError(true);
            });
        }, []);


    if (hasError) {
        return <div className="error">An error occurred while fetching the information.  Sorry!  Please check the console for further details and try again.</div>;
    }

    if (object === null) {
        return <div>Loading information...</div>;
    }

  return (
    <div className="show-stats">
        
        <p>{object.genres}<br/>
        {object.summary}</p>

        <img src={object.image.medium} alt='Season 4 official teaser poster for Black Sails' />
        <table>
            <tr>
                <td>Network:</td>
                <td>{object.network.name}</td>
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

        <p>IMDB page: <Link to='https://www.imdb.com/title/tt2375692/'>https://www.imdb.com/title/{object.externals.imdb}</Link></p>
    </div>
  )
}

export default TVMazeAPI