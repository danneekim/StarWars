# StarWars

StarWars is a Angular application that consumes the free [Star Wars API](https://swapi.co/) to display movies related to the characters from the provided list.

## Objectives

* Allow users to choose a character from the provided JSON file
    * The app allows the user to choose a character from the provided JSON file. 
* Upon selection of a character, the UI should update to display information about each of the films that that character appears in. Minimally: Title, and formatted ('Thursday, May 19 2005') release date
    * The app displays the movie's title, release date, director, producers, episode number, and opening crawl summary.
* Do this with any js framework, and some kind of component-based pattern
    * The app is written in Angular 8 - a js framework that follows a component-based pattern.
* You can only use the API routes found the provided 'characters.json' file, and the data returned from those calls 
    * The app uses the API routes found in character.json to make HTTP calls to retrieve relevant data.
* Don't load the movie data until the character is clicked
    * The app does not load any movie data until a character selection is made.
* Don't show any movie information until all of the character's movies have loaded
    * The app does not show any movie information until all the movies are loaded/retrieved.
* Handle HTTP errors (While loading the character as well as the film information)
    * The app handles HTTP errors.
* Separate concerns where applicable
    * The app seperates functional concerns in approperiate files.
* Make it pretty! You're encouraged to use Bootstrap, Bulma, Material Components, or any other css framework
    * The app is styled using ZURB Foundation, and other open-source CSS code.

## Personal Notes
Initially - I wanted to build this app with a component library that I've been building/developed while working at Barclays. 
  * ACL - Angular Component Library, also styled using ZURB Foundation - is being implemented/used in other projects/apps at Barclays.
  * Unfortunately, the library is yet to be open-sourced and currently unavailable to the public and my personal use.


## Credits/References:
* [Twinkling Star background](https://codepen.io/WebSonick/pen/vjmgu)
* [Opening Crawl message](https://codepen.io/christopherkade/pen/rJVPjz)
