import { Link } from 'react-router-dom'

function Postcast() {
      
  
    return (
        <main>
            <p className='podcastPage'>Listen to interviews with the cast, crew, and other special guests!</p>
            <script src="https://static.elfsight.com/platform/platform.js" async></script>
            <div className="elfsight-app-fa43db6b-889a-46c9-9c5b-4f48ac20d8c1" data-elfsight-app-lazy></div>

            <p className='podcastPage'>⛵ If the free podcast widget above has failed, the episodes can be directly accessed at:  <Link to='https://commonroomradio.com/podcasts/fathoms-deep/'>Common Room Radio</Link> or <Link to='https://www.justsaypodcast.com/fathoms-deep-podcast'>Just Say Podcast</Link></p>
        </main>
    )
}

export default Postcast