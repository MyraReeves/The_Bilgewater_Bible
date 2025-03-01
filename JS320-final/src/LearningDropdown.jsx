import PropTypes from "prop-types";

function LearningDropdownMenu(props) {
    const {selection, setSelection} = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(selection)
     };

    const handleSelection = (event) => {
        setSelection(event.target.value);
    }

  return (
    <div className="learning-dropdown">
        <form onSubmit={handleSubmit}>
            <label htmlFor="learning-choices">Choose a topic: </label>
            <select name="learningLibrary" id="learning-choices" onChange={handleSelection} value={selection}>
                <option disabled> </option>
                <option value="bahamas">Bahamas</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
        </select>
        <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}

LearningDropdownMenu.propTypes = {
    selection: PropTypes.string.isRequired,
    setSelection: PropTypes.func.isRequired,
}

export default LearningDropdownMenu
