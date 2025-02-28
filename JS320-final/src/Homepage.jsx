import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import PirateAPI from './PirateAPI';
import EpisodeList from './EpisodeAPI';
import AmazonLogo from './images/amazon.jpg';
import NetflixLogo from './images/netflix.png';
import AppleTvLogo from './images/AppleTv.png';
import StarzLogo from './images/starz.png';

function Homepage(props) {
    const {hasError, setHasError} = props;
  
    return (
        <main>
            <PirateAPI/>
            <EpisodeList
                hasError={hasError} 
                setHasError={setHasError}  />

            <div className='trailers'>
                <p className='homepagePreviews'>Season 1</p>
                <p className='release-dates'>
                    Episodes: I - VIII<br/>
                    Released from January-March 2014
                </p>
                <iframe width="660" height="315" src="https://www.youtube.com/embed/rT2Y5jjBNpQ?si=e50p1R5prTEpyVgE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className='trailers'>
                <p className='homepagePreviews'>Season 2</p>
                <p className='release-dates'>
                    Episodes: IX - XVIII <br/>
                    Released from January-March 2015
                </p>
                <iframe width="660" height="315" src="https://www.youtube.com/embed/OvaXhRq8VB4?si=xWnmZq23ReBcpdu0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className='trailers'>
                <p className='homepagePreviews'>Season 3</p>
                <p className='release-dates'>
                    Episodes: XIX - XXVIII <br/>
                    Released from January-March 2016
                </p>
                <iframe width="660" height="315" src="https://www.youtube.com/embed/Uq61obO9lww?si=C5brh_Bn7-NAhkyh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className='trailers'>
                <p className='homepagePreviews'>Season 4</p>
                <p className='release-dates'>
                    Episodes: XXIX - XXXVIII <br/>
                    Released from January-April 2017
                </p>
                <iframe width="660" height="315" src="https://www.youtube.com/embed/gyJW2Xrf6EI?si=1x5dnwZo8BzjQ1Ap" title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <p className='watch-on'>Watch all 4 seasons on: <br/>   
                <Link to='https://www.amazon.com/Black-Sails/dp/B00HWIWG0U/ref=sr_1_2'> <img src={AmazonLogo} alt='Amazon Video'/> </Link>
                <Link to='https://www.netflix.com/title/70285580'> <img src={NetflixLogo} alt='Netflix'/> </Link> 
                <Link to='https://tv.apple.com/us/show/black-sails/umc.cmc.2aq6e38r265c2z6nkjdbacqvd'> <img src={AppleTvLogo} alt='Apple TV +'/> </Link> &nbsp;
                <Link to='https://www.starz.com/us/en/series/black-sails/season-1/19965'> <img src={StarzLogo} alt='Starz'/> </Link>
            </p>

            <div className='opening-titles'>
                <div>
                    <iframe width="660" height="365" src="https://www.youtube.com/embed/PBmzzrU3gR8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

                <div style={{marginTop: "50px"}}>
                    <iframe width="660" height="365" src="https://www.youtube.com/embed/XFTcA4QLHw0" title="YouTube video player"  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
           </div>

        </main>
    )
}

Homepage.propTypes = {
    hasError: PropTypes.bool,
    setHasError: PropTypes.func,
}

export default Homepage