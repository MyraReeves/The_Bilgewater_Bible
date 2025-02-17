// This file maps an array of objects given by the API, in order to generate a visual list on the screen of each actor's photo, name, birthdate, and who they portrayed on the show.


import { useEffect, useState } from "react"

function CastAPI() {
    const [arrayOfcastMembers, setArrayOfcastMembers] = useState([]);
    const [hasError, setHasError] = useState(false);

    useEffect( () => {
        fetch('https://api.tvmaze.com/shows/182/cast')

            // Uncomment this block of code if needed for checking the response sent by the API:
            /*
             .then( response => {
                if(response.status == 200){
                    const additionalInfo = '-- Fetch of requested data succeeded! 🎉';
                    console.log('The response status from the API was:', response.status, additionalInfo)
                };
                if(response.status == 429){
                    const additionalInfo = "-- Your IP address has sent too many requests within a given amount of time. It exceeded the API's rate limits. 🏇💨"
                    console.log('The response status from the API was:', response.status, additionalInfo)
                };
                if(response.status != 200 && response.status != 429) {
                    console.log('The response status from the API was:', response.status)
                };
             })
            */

            .then( response => response.json() )

            .then( objectArrayInsideResponse => {
                setArrayOfcastMembers(objectArrayInsideResponse);
            })

            .catch( error => {
                console.log('%cThe following error occured when attempting to fetch data from the API: \n', 'color: red; font-weight: bold; font-size: larger', error);
                setHasError(true);
            });
        }, []);


    if (hasError) {
        return <div className="error">⛔ An error occurred while fetching the information.  Sorry! ⛔ <br/>Please check the console for further details.</div>;
    }

    if (arrayOfcastMembers === null) {
        return <div className="loading">Loading information...</div>;
    }


    // Sort the array in alphabetical order of the actor names:
    arrayOfcastMembers.sort(
        function(object1, object2) {
            if (object1.person.name < object2.person.name) {
                return -1;
            }
            if (object1.person.name > object2.person.name) {
                return 1;
            }
            else {
                return 0;
            }
        }
    );


  return (
    <main>
        <h1>☠️ <span className="underline">Cast Members</span> ☠️</h1>
        <div className="subheading">(In alphabetical order of their first names)</div>
        {arrayOfcastMembers.map( (eachCastMember, index) => (
            <div key={index} className="cast-list">
                <h2> {eachCastMember.person.name} </h2>
                <img src = {eachCastMember.person.image.medium} alt = 'Photo of the actor'/>
                <p> Nationality: &nbsp; <span className="info"> {eachCastMember.person.country.name} </span> </p>
                <p> Born on: &nbsp; <span className="info"> {eachCastMember.person.birthday} </span> </p>
                <p> Portrays: &nbsp; <span className="info"> {eachCastMember.character.name} </span> </p>
            </div>
            ))
        }


    </main>
  )
}


export default CastAPI