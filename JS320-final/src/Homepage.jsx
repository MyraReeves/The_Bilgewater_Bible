import { Link } from 'react-router-dom';
import EpisodeList from './EpisodeAPI';
import AmazonLogo from './images/amazon.jpg';
import NetflixLogo from './images/netflix.png';
import AppleTvLogo from './images/AppleTv.png';
import StarzLogo from './images/starz.png';

function Homepage() {
    
    return (
        <main>
            <div className="greeting">
                <h2>Welcome to Governor Augustus Featherstone&apos;s Incomplete and Accurate, Totally Fictional <br/>Journal of Who&apos;s Who in Nassau Town Circa 1715.</h2> 
                <p>Here-in lies an account of flibustiers, buccaneers, freebooters, maroons, privateers, and the occassional jungaless/termagant. <br/> Dis ting go with sense and keep yer wits about ye. For there is no peace beyond the line!</p>
            </div>

            <EpisodeList/>
            
            <div className='trailers'>
                <p className='homepagePreviews'>Season 1</p>
                <p className='release-dates'>
                    Episodes: I - VIII<br/>
                    Released from January-March 2014
                </p>
                <iframe width="660" height="315" src="https://www.youtube.com/embed/rT2Y5jjBNpQ?rel=0" frameBorder="0" allowFullScreen title="The first season's official preview trailer. This video is hosted on YouTube" />
            </div>

            <div className='trailers'>
                <p className='homepagePreviews'>Season 2</p>
                <p className='release-dates'>
                    Episodes: IX - XVIII <br/>
                    Released from January-March 2015
                </p>
                <iframe width="660" height="315" src="https://www.youtube.com/embed/OvaXhRq8VB4?rel=0" frameBorder="0" allowFullScreen title="The second season's official preview trailer. This video is hosted on YouTube" />
            </div>

            <div className='trailers'>
                <p className='homepagePreviews'>Season 3</p>
                <p className='release-dates'>
                    Episodes: XIX - XXVIII <br/>
                    Released from January-March 2016
                </p>
                <iframe width="660" height="315" src="https://www.youtube.com/embed/Uq61obO9lww?rel=0" frameBorder="0" allowFullScreen title="The third season's official preview trailer. This video is hosted on YouTube" />
            </div>

            <div className='trailers'>
                <p className='homepagePreviews'>Season 4</p>
                <p className='release-dates'>
                    Episodes: XXIX - XXXVIII <br/>
                    Released from January-April 2017
                </p>
                <iframe width="660" height="315" src="https://www.youtube.com/embed/gyJW2Xrf6EI?rel=0" frameBorder="0" allowFullScreen title="The first season's official preview trailer. This video is hosted on YouTube" />
            </div>

            <p className='watch-on'>Watch all 4 seasons on: <br/>   
                <Link to='https://www.amazon.com/Black-Sails/dp/B00HWIWG0U/ref=sr_1_2'> <img src={AmazonLogo} alt='Amazon Video'/> </Link>
                <Link to='https://www.netflix.com/title/70285580'> <img src={NetflixLogo} alt='Netflix'/> </Link> 
                <Link to='https://tv.apple.com/us/show/black-sails/umc.cmc.2aq6e38r265c2z6nkjdbacqvd'> <img src={AppleTvLogo} alt='Apple TV +'/> </Link> &nbsp;
                <Link to='https://www.starz.com/us/en/series/black-sails/season-1/19965'> <img src={StarzLogo} alt='Starz'/> </Link>
            </p>

            <div className='opening-titles'>
                <div>
                    <iframe width="660" height="365" src="https://www.youtube.com/embed/PBmzzrU3gR8?rel=0" allowFullScreen title="A video of the musicians playing the opening credits theme song. This video is hosted on YouTube" />
                </div>

                <div style={{marginTop: "50px"}}>
                    <iframe width="660" height="365" src="https://www.youtube.com/embed/XFTcA4QLHw0?rel=0" frameBorder="0" allowFullScreen title="The show's opening credits. This video is hosted on YouTube" />
                </div>
           </div>

        </main>
    )
}

export default Homepage