import { useNavigate } from 'react-router-dom'
import PirateAPI from './PirateAPI'

function Homepage() {
  
    return (
        <main>
            <PirateAPI />
            <div className='trailers'>
                <p className='homepagePreviews'>Season 1</p>
                <p className='release-dates'>Released from January-March 2014</p>
                <iframe width="660" height="315" src="https://www.youtube.com/embed/rT2Y5jjBNpQ?si=e50p1R5prTEpyVgE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className='trailers'>
                <p className='homepagePreviews'>Season 2</p>
                <p className='release-dates'>Released from January-March 2015</p>
                <iframe width="660" height="315" src="https://www.youtube.com/embed/OvaXhRq8VB4?si=xWnmZq23ReBcpdu0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className='trailers'>
                <p className='homepagePreviews'>Season 3</p>
                <p className='release-dates'>Released from January-March 2016</p>
                <iframe width="660" height="315" src="https://www.youtube.com/embed/Uq61obO9lww?si=C5brh_Bn7-NAhkyh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className='trailers'>
                <p className='homepagePreviews'>Season 4</p>
                <p className='release-dates'>Released from January-April 2017</p>
                <iframe width="660" height="315" src="https://www.youtube.com/embed/gyJW2Xrf6EI?si=1x5dnwZo8BzjQ1Ap" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </main>
    )
}

export default Homepage