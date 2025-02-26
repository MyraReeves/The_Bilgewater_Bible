

function LearningDropdownMenu() {

    const selectedOption = (event) => {
        event.preventDefault()


    }

  return (
    <div className="learning-dropdown">
        <form onSubmit={selectedOption}>
            <label htmlFor="learning-choices">Choose a topic: </label>
            <select name="learningLibrary" id="learning-choices">
                <option value="blank"> </option>
                <option value="bahamas">Bahamas</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
        </select>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default LearningDropdownMenu
