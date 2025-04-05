import PropTypes from "prop-types";

function LearningDropdownMenu(props) {
    const {selection, setSelection} = props;

    const handleSubmit = (event) => {
        event.preventDefault();
     };

    const handleSelection = (event) => {
        setSelection(event.target.value);
    }

  return (
    <div className="learning-dropdown">
        <form onSubmit={handleSubmit}>
            <label htmlFor="learning-choices">Choose an option to read: </label><br/>
            <select name="learningLibrary" id="learning-choices" onChange={handleSelection} value={selection}>
                <option disabled> </option>
                <optgroup label="Antique Books About Pirates:">
                    <option value="spanishAccount">📔1681 book ✴️written in Spanish✴️ - &#34;Piratas de la America&#34; </option>
                    <option value="spanishRecommendations">📕1694 book ✴️written in Spanish✴️ - &#34;Forma de Assegurar Los Puertos y Poblaciones de Todas las Costas de las Indias&#34;</option>
                    <option value="histoireFlibustiers">📗1804 book ✴️written in French✴️ - &#34;Histoire des Flibustiers&#34;</option>
                    <option value="notoriousPirates">📙1725 book - &#34;The History and Lives of All the Most Notorious Pirates and Their Crews&#34;</option>
                    <option value="buccaneersAmerica">📘1816 book - &#34;History of the Buccaneers of America&#34;</option>
                    <option value="pirateCaptains">📔1829 book - &#34;History of [...] Pirate Captains [...] Tried, Condemned, and Executed at Nassau on 10 of December 1718&#34;</option>
                    <option value="pirateLives">📕1839 book - &#34;Lives and voyages of Drake, Cavendish, and Dampier&#34;</option>
                    <option value="piratesOwn">📗1856 book - &#34;The Pirates Own Book&#34;</option>
                    <option value="ravagedSeas">📙1874 book - &#34;Pirates or Buccaneers Who Ravaged the Seas [...] Two Hundred Years Ago&#34;</option>
                    <option value="savageLands">📘1891 book - &#34;Heroes of Unknown Seas and Savage Lands&#34;</option>
                    <option value="britishPrivateer">📔1894 book - &#34;Life Aboard a British Privateer in the Time of Queen Anne&#34;</option>
                    <option value="stolenTreasure">📕1907 book - &#34;Stolen Treasure&#34;</option>
                    <option value="buccaneersThesis">📓1910 thesis, Board of Modern History, Oxford University - &#34;The Buccaneers in the West Indies in the XVII Century&#34;</option>
                </optgroup>
                <option disabled> </option>
                <optgroup label="Additional Resources:">
                    <option value="bahamas">🌎 Learn more about the Bahamas</option>
                    <option value="1700sMap">🖼️ Map of New Providence Island from the 1700s</option>
                    <option value="treasureIsland">📖 Young Adult Fiction - Original 1883 edition of &#34;Treasure Island&#34;</option>
                </optgroup>
        </select>
        </form>
    </div>
  )
}

LearningDropdownMenu.propTypes = {
    selection: PropTypes.string.isRequired,
    setSelection: PropTypes.func.isRequired,
}

export default LearningDropdownMenu
