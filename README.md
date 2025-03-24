# 🏴‍☠️ The Bilgewater Bible 🏴‍☠️ — _A Black Sails Fansite_

## UW JS320 Final Project Requirements

* Submit wireframes to help visualize what your project will look like, and a 2 week plan including what steps you plan to accomplish each week.
* Must be a React application bootstrapped with Vite.
* Utilize modern methods of writing JavaScript. No `var` keyword.  Use arrow functions where appropriate and use modern methods such as `.map()`
* Fetch an external API, whether that is a publicly available API or a database that you have created (for example on Firebase).  Must use the native fetch API; no external libraries for data fetching (like Axios or react-query). EXCEPTION: Can use Firebase SDK if you are using a Firebase App.
* Use a minimum of two routes, ideally one that takes params to call API data. The app should use React Router.
* As needed components should be flexible and reusable.
* All components that take in props must use prop-types.
* Incorporate at least one unit test. Components reliant on API calls will not need to be unit tested. Must document how to run tests.
* Incorporate custom CSS into the project.
* Perform some basic user testing.

<br>

## 🏴‍☠️ Project Description

Television shows are a common conversational topic among both friends and strangers. When I asked avid television viewers what they felt is lacking on most tv show fansites, the answers I recieved back all had in common a desire among viewers to learn more about their favorite show. Therefore, my app provides educational services to fans of a specific television show. I chose the television show "Black Sails." When asked using that tv show in specific, the additional detail I recieved from viewers was a desire to learn more about the actual real life history behind the fictitious story.

"Black Sails" is a loosely historical, action-adventure television series set in the Caribbean (and some scenes in England) a few decades before the U.S. fought for independence from Great Britain. It features a mix of fictional pirates from the novel "Treasure Island" and real life historical figures. The show serves as an adult-level (nudity, violence, gore) prequel to "Treasure Island" and tells a complete story of richly complicated characters (especially Captain Flint and Long John Silver) across four television seasons.

There were several reasons behind my chosing it as the subject of my fansite app. Firstly, there did not appear to be very many existing fansites for the show. I could only find one, and it was only a wikipages site without other features. The timing for a new fansite of "Black Sails" is especially relevant now because Netflix only just added the show to their streaming platform last year. The show features movie-quality costumes/sets, stars a number of award-winning actors, received favorable reviews from both critics and audiences, and won awards for both visual effects and music/sound editing.  The classic children's book ("Treasure Island") inspiring the show remains popular and well-known.  Fictitious representations of pirates also remain popular among adult hobbiests. Despite these factors, widespread popular knowledge about the tv show remains relatively weak, possibly due to it having originally aired during the height of "Game of Thrones" popularity (ie. network competition for viewers may have hindered widespread public viewing of "Black Sails").  Lastly, factual knowledge about American and Caribbean history remains a public need and is sought out by various history hobbyists and educators.

My app utilizes APIs to provide all of the standard tv show fansite details such as episode summaries, ratings, a cast listing, and summary descriptions of each character. To help fulfill the added goal of learning more, when appropriate (ie. when the character wasn't invented specifically for the show) I also provided information concerning the historical or literary figure.

To further expand on fulfilling that expressed desire audiences have for learning more about the real life history behind the show, my app allows visitors to read the archived pages of antique books about piracy that have been saved within the Library of Congress.

When asked to elaborate on what they wished was available on more fansites, some television aficionados also specified that they wished to learn more about the mindset/intentions of producers, script writers, and actors in their favorite shows. To fulfill that goal for fans of "Black Sails," my app provides easy access to listen to interviews of the cast and crew that were conducted on the "Fathoms Deep" podcast.

<br>

## 🏴‍☠️ APIs & Other Dependencies

* [Elfsight](https://elfsight.com/)
* [Firebase](https://firebase.google.com/)
* [Library of Congress API](https://www.loc.gov/apis/)
* [REST Countries](https://restcountries.com/)
* [TVMaze API](https://www.tvmaze.com/api)
* [Vitest](https://vitest.dev/)

The free embeddable podcast player widget from [Elfsight](https://elfsight.com/) was easy to set up and integrate. Likewise, the [TVMaze](https://www.tvmaze.com/api) and [REST Countries](https://restcountries.com/) APIs were also very easy to use and understand.  The only minor issue I ran into was TVMaze's inclusion of HTML tags inside of value strings (their HTML tags appeared on the screen as string characters). The instructions for how to use the [Library of Congress API](https://www.loc.gov/apis/) were much more complicated than the others, despite there being several pages on their website about the topic.  Additionally, the frequency with which the entire Library of Congress website crashes throughout the day due to server traffic overload is very unfortunate.

<br>

## 🏴‍☠️ Future Improvements/Additions

Thankfully, I was able to implement most of the feedback I received during user testing before the project deadline. However, I know that some very minor stylistic layout issues are still occurring on extremely wide monitor screens.  I also definitely need to add CSS rules to handle the small size of mobile device screens.  Special small screen rules weren't a priority for the project (not part of the assignment requirements), but the vast majority of time people spend online nowadays is on mobile devices. During user testing, I kept having to warn users that my app should only be viewed on a desktop sized monitor. So implementing those screen size rules should be a high priority.

During the project proposal phase, one of the features considered for inclusion was an old fashioned vingt-un card game.  Time constraints did not allow it to be developed before the project deadline, but I still think it would be a fun addition. I hope to be able to add the game in the future, most likely using the [Deck of Cards](https://www.deckofcardsapi.com/) API.

I also would like to solve how to add a footer.  For some reason the page formatting failed when I attempted to add a footer component into the App.jsx file.  Despite me placing the `<footer>` HTML tag _after_ the `<main>` tag's content, the browser visually inserted the `footer` content into the middle of the screen directly in the middle of the `<main>` section's content and I don't know why.  Even placing `bottom: 0` instructions into the CSS file for the footer failed to move it to below `<main>`.  Within the time limit bounds of the project, it made more sense for me to simply leave out a footer from the website instead of continuing to problem solve the situation, but it would be nice to solve the footer situation.

<br>

## _**How to Run Unit Tests:**_

After cloning this repository and navigating to the `Black-Sails-Fansite` app directory, tests can be run in the terminal using the command `npm run test`.

Unit testing for this project was performed using [Vitest](https://vitest.dev/).  All dependencies have already been installed. The coding used inside my test file can be viewed by navigating to `src` > `tests` > `App.test.jsx`.

