// This file displays onto the screen the LearningDropdown file's menu of options followed by the results of whichever option the user selects.

import { useState } from "react"
import ships from './images/ships1.jpg'
import LearningDropdownMenu from "./LearningDropdown"
import BahamasInfo from "./Bahamas"
import LibraryOfCongressAPI from "./LOC"

function LearnMore() {
    const [selection, setSelection] = useState('')

    const checkForSelection = () => {
        if (selection == ''){
            return <img src={ships} alt='Image of two full-rigged ships on rough seas, one a long distance in front of the other' className="nothing-selected"/> 
        }

        if (selection == 'bahamas'){
            return <div className="box-shadow"> <BahamasInfo/> </div>
        }

        // 1725 book: "The history and lives of all the most notorious pirates, and their crews, from Capt. Avery, who first settled at Madagascar, to Capt. John Gow, and James Williams, his Lieutenant, Etc. who were hang'd at Execution Dock, June 11, 1725, for Piracy and Murther, and afterwards hang'd in Chains between Blackwall and Deptford"
        if (selection == 'notoriousPirates'){
            return <div className="box-shadow"> <LibraryOfCongressAPI referenceURL = 'resource/rbc0001.2019gen31667/?st=gallery&c=180'/> </div>
        }

        // 1829 book: "The History of the pirates, containing the lives of those noted pirate captains, Misson, Bowen, Kidd, Tew, Halsey, White, Condent, Bellamy, Fly, Howard, Lewis, Cornelius, Williams, Gurgess, North, and their several crews, also, an account of the piracies and cruelties of John Auger, William Cunningham, Dennis MacCarthy, William Lewis, Thomas Morris, George Bendall, and William Ling, who were tried, condemned, and executed at Nassau, New Providence, on the tenth of December 1718, to which is added the correct account of the late piracies committed in the West Indes; and the expedition of Commodore Porter"
        if (selection == 'pirateCaptains'){
            return <div className="box-shadow"> <LibraryOfCongressAPI referenceURL = 'resource/gdcmassbookdig.historyofpirates01care/?st=gallery&c=294'/> </div>
        }

        // 1839 book:   "Lives and voyages of Drake, Cavendish, and Dampier"
        if (selection == 'pirateLives'){
            return <div className="box-shadow"> <LibraryOfCongressAPI referenceURL = 'resource/gdcmassbookdig.livesvoyagesofdr00john/?st=gallery&c=346'/> </div>
        }

        // 1856 book:   "The Pirates Own Book"
        if (selection == 'piratesOwn'){
            return <div className="box-shadow"> <LibraryOfCongressAPI referenceURL= 'resource/gdcmassbookdig.piratesownbook00ellm_0/?st=gallery&c=442' /> </div>
        }

        // 1874 book:   "Captain William Kidd and others of the pirates or buccaneers who ravaged the seas, the islands, and the continents of America two hundred years ago"
        if (selection == 'ravagedSeas'){
            return <div className="box-shadow"> <LibraryOfCongressAPI referenceURL= 'resource/gdcmassbookdig.captainwilliamki01abbo/?st=gallery&c=398' /> </div>
        }

        // 1894 book: "Life aboard a British privateer in the time of Queen Anne : being the journal of Captain Woodes Rogers"
        if (selection == 'britishPrivateer'){
            return <div className="box-shadow"> <LibraryOfCongressAPI referenceURL='resource/gdcscd.00413141047/?st=gallery&c=178' /></div>
        }

        // 1910 thesis presented to the Board of Modern History of Oxford University: "The Buccaneers in the West Indies in the XVII century"
        if (selection == 'buccaneersThesis'){
            return <div className="box-shadow"> <LibraryOfCongressAPI referenceURL= 'resource/gdcmassbookdig.buccaneersinwest00hari/?st=gallery&c=352' /> </div>
        }

        // 1883 edition: "Treasure Island"
        if (selection == 'treasureIsland'){
            return <div className="box-shadow"> <LibraryOfCongressAPI referenceURL= 'resource/rbc0001.2022rosen2065/?st=gallery&c=317' /> </div>
        }
    }

  
    return (
        <main>
            <LearningDropdownMenu 
                selection={selection} 
                setSelection={setSelection} 
            />

            <div className="selection">{checkForSelection()}</div>
            
        </main>
    )
}

export default LearnMore