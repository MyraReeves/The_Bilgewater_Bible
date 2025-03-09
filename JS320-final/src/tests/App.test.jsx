import { describe, expect, it, test } from "vitest";
import { render, screen } from '@testing-library/react';
import LearnMore from '../LearnMore'


describe('Testing that the pages in my app load correctly', () => {

    // Preliminary testing of Vitest functionality:
    test('whether Vitest is functioning properly', () => {
        expect(4+4).toEqual(8);
    });

    // Testing whether the initially loaded state of the 'Learn More' page renders correctly onto the browser screen before any selection is made by the user:
    it('should render the initial state of the Learn More landing page correctly', async () => {        
        render( <LearnMore/> );

        // Regardless of user interaction, the page should ALWAYS have the "A story is true..." quote at the top of the page:
        const quoteAsHeading = screen.getByRole('heading', {name: '"A story is true; a story is untrue. As time extends, it matters less and less. The stories we want to believe are the ones that survive, despite upheaval and transition and progress. Those are the stories that shape history."'});
        expect(quoteAsHeading).toBeInTheDocument();

        // Likewise, the dropdown options menu <form> should ALWAYS be visible on the page regardless of what the user does on the page. That form contains the label 'Choose an option to read:'
        const formLabel = screen.getByRole('combobox', {name: 'Choose an option to read:'});
        expect(formLabel).toBeInTheDocument();

        // When the "selection" variable is an empty string (which is only possible before the user makes a selection from the dropdown menu), the "checkForSelection" function should return a warning message about the veracity of historical books. Additionally, the paragraph containing that warning text should be styled using a class named "warning".:
        const warningStatement = screen.getByText('** The veracity of historical books about pirates (such as the books available to read here) has been strongly challenged by historians. No records exist to support many of the claims made in these books, untraceable pen names were used in some cases by the authors, and much of their content seems to have been designed purely to entertain the public.');
        expect(warningStatement).toHaveClass('warning');

        // In addition to the initially loaded page content that has been tested for above, before the user makes any selection (i.e. when the "selection" variable is still an empty string), the "checkForSelection" function should ALSO return an image of two ships onto the page. The unique alt text for that image can be used for this test: 
        const imageOfShips = screen.getByRole('img', {name: 'Image of two full-rigged ships on rough seas, one a long distance in front of the other'});
        expect(imageOfShips).toBeInTheDocument();

    });
});