// This file uses the Library of Congress API to display historical documents (books, images, etc.) onto the screen
import { useEffect, useState } from "react";
import PropTypes from "prop-types"

function LibraryOfCongressAPI({referenceURL}) {
    const [historicalDocument, setHistoricalDocument] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(true);

    const [imageToResize, setImageToResize] = useState(null);

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
        return <div><p className="error">⛔ An error occurred while fetching the information.  Sorry! ⛔ <br/><br/><br/>The Library of Congress server is prone to crashing due to traffic overload and recent U.S. government cuts. <br/> Please wait a moment and try again.<br/><span className="LOC-download"><br/>If the problem persists, a PDF version of the text can be downloaded directly from the <a href="https://www.loc.gov/" target="_blank" rel="noopener noreferrer">Library of Congress website.</a></span></p></div>;
    }

    if (loading) {
        return <div><p className="loading">Loading... <br/><span className="LOC-loading">The Library of Congress API server moves slowly sometimes. Thank you for your patience.<br/><br/>If an error message appears after this loading screen, please refresh your browser and try again. Their API <strong><em>is</em></strong> CORS-compliant!</span></p></div>
    }

    if (historicalDocument === null) {
        return <div className="loading">The API failed to return any data. <br/> Please try again later</div>;
    }



    // Conditionals to handle the books containing title page image errors:
    if (referenceURL == 'resource/rbc0001.2019gen31667/?st=gallery&c=180'){
        historicalDocument.item.image_url = 'https://tile.loc.gov/image-services/iiif/service:rbc:rbc0001:2019:2019gen31667:0009/full/pct:25/0/default.jpg#h=639&w=389'
    }
    if (referenceURL == 'resource/gdcscd.00413141047/?st=gallery&c=178'){
        historicalDocument.item.image_url = 'https://tile.loc.gov/image-services/iiif/service:gdc:gdcscd:00:41:31:41:04:7:00413141047:0005/full/pct:25/0/default.jpg#h=628&w=453'
    }

    if (referenceURL == 'resource/rbc0001.2022rosen2065/?st=gallery&c=317'){
        historicalDocument.item.image_url = 'https://tile.loc.gov/image-services/iiif/service:rbc:rbc0001:2022:2022rosen2065:0012/full/pct:25/0/default.jpg#h=814&w=559'
    }

    
    // Function to toggle between an enlarged versus a small image of the book's page
    const handleClick = (index) => {
        setImageToResize((previous) => (previous === index ? null : index));
      };


  return (
    <div className="library-of-congress-scans">
        <p>Courtesy of the <a href={historicalDocument.item.aka[1]} target="_blank" rel="noopener noreferrer">U.S. Library of Congress</a></p>
        <img src={historicalDocument.item.image_url} alt="Title page of the book"/>

        <h3>Click any page below to open a larger version of it for reading</h3>
        <h4>Note: Clicking another page will return the page you have just finished reading back to its original small size</h4>
        <div className="pages">
            {historicalDocument.segments.map( (eachPage, index) => (
                <div key = {index}>
                    <img
                        src={ imageToResize === index ? eachPage.image_url[2] : eachPage.image_url[0] }
                        alt="A page of the book"
                        className={imageToResize === index ? "large-page" : "small-page"}  //Makes the class dynamic
                        onClick={() => handleClick(index)}
                    />
                </div>
            ))}
        </div>
        <p><a href={historicalDocument.resource.pdf} target="blank" rel="noopener noreferrer">🔗 Download a pdf of this book here 🔗</a></p>
    </div>
  )
}

LibraryOfCongressAPI.propTypes = {
    referenceURL: PropTypes.string.isRequired
}

export default LibraryOfCongressAPI
