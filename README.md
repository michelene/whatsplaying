# whatsplaying

View trailers and text descriptions for movies currently playing in theaters.

[Heroku link](https://whatsplaying-movies.herokuapp.com/)

## Project Description

- This app will display all movies currently playing in theaters.
- The movies will be displayed as tiles. When you click on a tile, a trailer for the movie will play.
- In addition to the trailer, there will be fixed size text description link for each movie, which will be expandable to display the full description.
- The app will work seamlessly between desktop and mobile.

## Technologies/APIs Used (MVP)

- [TMDb](https://www.themoviedb.org/documentation/api)
- [YouTube Data API v3](https://developers.google.com/youtube/v3/getting-started)
- [react-youtube NPM package](https://www.npmjs.com/package/react-youtube)
  - This package contains built-in iFrames to allow embedded playback
- ReactJS
- React Hooks
- CSS Grid and Flexbox

## Technologies Used (Beyond MVP)

- For the 'Near Me' (non-MVP) feature, I will use the Fandango RSS feed to grab data, then I will parse the XML data into a format which is usable by the app. (See https://www.fandango.com/rss/moviesnearme_95409.rss)
- For the 'Auto-determine Zip Code' (non-MVP) feature, I will possibly use `navigator.geolocation.getCurrentPostion` and `position.address.postalCode`.
- React Router
- Bootstrap for styling

## Wireframes

- [Desktop](./wireframe-desktop.png)
- [Mobile](./wireframe-mobile.png)

## User Stories

- As a user, I would like to access a collection of all movies currently in theaters, and be able to play the trailers to see if they interest me (MVP).
- As a user, I would like to access a collection of all movies currently in theaters, and read a text description of each one. (MVP)
- As a user, I would like to see the release date of each movie on the main page. (MVP)
- As a user, I would like each movie description to show up on the main page. (MVP)
- As a user, I would like to be able to access this app on my mobile device and have it render and function appropriately. (MVP)

## User Stories - Beyond MVP

- As a user, I would like to be able to enter my zip code on the page and see what is playing in theaters around me. (Non-MVP)
- As a user, I would like for my zip code to be automatically determined if I have shared my geolocation data. The Zip Code input field on the form will be pre-filled for me with my current geolocation zipcode. (Non-MVP)
- As a user, I would like to be able to filter by genre by clicking on a navigational menu which will then filter the results. (Non-MVP)
- As a user, I would like to be able to filter results by rating (G, PG, PG-13, R) by clicking on a navigation link. (Non-MVP)
- As a user, I would like to have the description area be a fixed size, with dots; when you click on the dots, it expands to show the entire text. (Non-MVP)
- As a user, I would like a hamburger menu for navigational purposes. (Non-MVP)
- As a user, I would like the site to have a relevant logo and corresponsing favicon. (Non-MVP)
- As a user, I would like to be able to sort the results by release date. (Non-MVP)
- As a user, I would like the genre(s) of a movie to be displayed as links. When I click on the genre link, it renders the page with filtered results matching that genre. (Non-MVP)
- As a developer, I would like for the app to utilize React Router. (Non-MVP)
- As a user, I would like the UI to be attractive looking and nicely styled. (Non-MVP)
