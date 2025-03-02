// This file displays onto the screen the LearningDropdown file's menu of options followed by the results of whichever option the user selects.

import { useState } from "react"

import ships from './images/ships1.jpg'
import LearningDropdownMenu from "./LearningDropdown"
import BahamasInfo from "./Bahamas"

function LearnMore() {
    const [selection, setSelection] = useState('')

    const checkForSelection = () => {
        if (selection == ''){
            return <img src={ships} alt='Image of two full-rigged ships on rough seas, one a long distance in front of the other' className="nothing-selected"/> 
        }

        if (selection == 'bahamas'){
            return <div className="box-shadow"> <BahamasInfo/> </div>
        }

        // 1839 book:  "Lives and voyages of Drake, Cavendish, and Dampier"
        if (selection == 'pirateLives'){
            return <div className="box-shadow"> LOCAPI </div>
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