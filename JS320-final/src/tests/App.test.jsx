import { describe, expect, it, test, expectTypeOf, vi } from "vitest";
import { render, screen, fireEvent, } from '@testing-library/react';
import LearnMore from '../LearnMore';
import LearningDropdownMenu from "../LearningDropdown";


describe('Testing that the Learn More page in my app loads correctly', () => {

    // TEST #1:  Preliminary testing to ensure Vitest functionality:
    test('whether Vitest is functioning properly', () => {
        expect(4+4).toEqual(8);
    });


    // TEST #2:  Testing whether the initially loaded state of the 'Learn More' page renders correctly onto the browser screen before any selection is made by the user:
    it('should render the initial state of the Learn More landing page correctly', async () => {        
        render( <LearnMore/> );

        // Regardless of user interaction, the page should ALWAYS have the "A story is true..." quote at the top of the page:
        const quoteAsHeading = screen.getByRole('heading', {name: '"A story is true; a story is untrue. As time extends, it matters less and less. The stories we want to believe are the ones that survive, despite upheaval and transition and progress. Those are the stories that shape history."'});
        expect(quoteAsHeading).toBeInTheDocument();


        // Likewise, the dropdown options menu <form> should ALWAYS be visible on the page regardless of what the user does on the page. That form contains the label 'Choose an option to read:'
        const formLabel = screen.getByRole('combobox', {name: 'Choose an option to read:'});
        expect(formLabel).toBeInTheDocument();


        // As of the time of coding this unit test (I intend to add more later), there are 12 options inside the dropdown form which the user can choose between. This next part of the test is to check that all 12 options appear inside of the dropdown menu:
        const option1 = screen.getByRole('option', {name: '🌎 Learn more about the Bahamas'});
        const option2 = screen.getByRole('option', {name: '📔1681 book ✴️written in Spanish✴️ - "Piratas de la America"'});
        const option3 = screen.getByRole('option', {name: '📕1694 book ✴️written in Spanish✴️ - "Forma de Assegurar Los Puertos y Poblaciones de Todas las Costas de las Indias"'});
        const option4 = screen.getByRole('option', {name: '📗1725 book - "The History and Lives of All the Most Notorious Pirates and Their Crews"'});
        const option5 = screen.getByRole('option', {name: '📙1816 book - "History of the Buccaneers of America"'});
        const option6 = screen.getByRole('option', {name: '📘1829 book - "History of [...] Pirate Captains [...] Tried, Condemned, and Executed at Nassau on 10 of December 1718"'});
        const option7 = screen.getByRole('option', {name: '📔1839 book - "Lives and voyages of Drake, Cavendish, and Dampier"'});
        const option8 = screen.getByRole('option', {name: '📕1856 book - "The Pirates Own Book"'});
        const option9 = screen.getByRole('option', {name: '📗1874 book - "Pirates or Buccaneers Who Ravaged the Seas [...] Two Hundred Years Ago"'});
        const option10 = screen.getByRole('option', {name: '📙1894 book - "Life Aboard a British Privateer in the Time of Queen Anne"'});
        const option11 = screen.getByRole('option', {name: '📓1910 thesis, Board of Modern History, Oxford University - "The Buccaneers in the West Indies in the XVII Century"'});
        const option12 = screen.getByRole('option', {name: '📖 Young Adult Fiction - Original 1883 edition of "Treasure Island"'});
        expect(option1).toBeInTheDocument();
        expect(option2).toBeInTheDocument();
        expect(option3).toBeInTheDocument();
        expect(option4).toBeInTheDocument();
        expect(option5).toBeInTheDocument();
        expect(option6).toBeInTheDocument();
        expect(option7).toBeInTheDocument();
        expect(option8).toBeInTheDocument();
        expect(option9).toBeInTheDocument();
        expect(option10).toBeInTheDocument();
        expect(option11).toBeInTheDocument();
        expect(option12).toBeInTheDocument();


        // When the "selection" variable is an empty string (which is only possible before the user makes a selection from the dropdown menu), the "checkForSelection" function should return a warning message about the veracity of historical books. Additionally, the paragraph containing that warning text should be styled using a class named "warning".
        const warningStatement = screen.getByText('** The veracity of historical books about pirates (such as the books available to read here) has been strongly challenged by historians. No records exist to support many of the claims made in these books, untraceable pen names were used in some cases by the authors, and much of their content seems to have been designed purely to entertain the public.');
        expect(warningStatement).toHaveClass('warning');


        // In addition to the initially loaded page content that has been tested for above, before the user makes any selection (i.e. when the "selection" variable is still an empty string), the "checkForSelection" function should ALSO return an image of two ships onto the page. The unique alt text for that image can be used to run this test: 
        const imageOfShips = screen.getByRole('img', {name: 'Image of two full-rigged ships on rough seas, one a long distance in front of the other'});
        expect(imageOfShips).toBeInTheDocument();
    });


    // TEST #3:  LearnMore should be a function inside of which the props "selection" and "setSelection" are defined:
    test('that LearnMore is a function', () => {
        expectTypeOf(LearnMore).toBeFunction();
    })

    // TEST #4:  The "setSelection" prop variable is passed to the LearningDropdownMenu function by the LearnMore function. That "setSelection" variable needs to be a function so that it can set the value of the "selection" variable:
    test('that the variable setSelection is a function'), () => {
        const { setSelection } = render( <LearningDropdownMenu />);
        expectTypeOf(setSelection).toBeFunction();
    }

    // TEST #5: The prop variable "selection" will recieve its value inside of the LearningDropdownMenu function:
    test('that LearningDropdownMenu is a function'), () => {
        expectTypeOf(LearningDropdownMenu).toBeFunction();
    }

    // TEST #6:  That "selection" prop variable (passed into the LearningDropdownMenu function) needs to be a string so that the conditionals inside of the LearnMore function can handle it properly:
    test('that the variable "selection" is a string'), () => {
        const { selection } = render( <LearningDropdownMenu /> );
        expectTypeOf(selection).toBeString();
    }

    // TEST #7:  The value of the "selection" prop variable should be set via the user's choice from the dropdown menu. To test that the dropdown menu functions properly I will select the value chosen as "bahamas":
    it('should render with the correct selection option'), () => {
        render(<LearningDropdownMenu selection = 'bahamas' handleSubmit = {vi.fn()} />);

        const dropdownSelectionElement = screen.getByRole('combobox');
        expect(dropdownSelectionElement).toBe('bahamas');
    }

    // Test #8:  Test that everything works when changing the value selected. In this test, the initial value chosen will be "ravagedSeas" and the new value chosen will be "treasureIsland":
    it('should call the handleSubmit function using the correct value when a new option is selected'), () => {
        const mockTest = vi.fn();
        render( <LearningDropdownMenu selection="ravagedSeas" handleSubmit={mockTest} />);

        const dropdownSelection = screen.getByRole('combobox');
        fireEvent.change(dropdownSelection, { target: { value: 'treasureIsland' } });
        expect (mockTest).toHaveBeenCalledWith('treasureIsland')
    }


});