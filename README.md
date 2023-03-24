# Cocktail Book

online demo will be available in [vercel app here](https://cocktail-book.vercel.app/)

### How to run
- execute `yarn install` in the root dir
- execute `yarn start` in the root dir. it will start webpack server on port 3000
- you can access the dev version via http://localhost:3000

### Tech
- created by create-react-app (typescript)
- redux for global state management with redux-persist
- react-query for network fetches
- react-router-dom for client side routing
- jest / react-testing-library for unit testing
- SCSS for styling

### Pages and Features
- Home (/)
  - Load random 5 cocktail details
    - this store the cocktail IDs in the redux store. 
    - while loading, we checked the same cocktail details has load previously
      - if it has loaded, we reload that specific card to get different details
      - this guaranteed that 5 distinct cocktail will be loaded at once.
  - Refresh button reload random data again.
  
- Search (/search?s=<>)
  - API support multiple search criteria (text and by fist name)
  - keep the searched query in the browser URL
  - There's a list of English Character to filter cocktail by first name 

- Cocktail Details page (/cocktail/13234)
  - shows the detailed information about the drink

- Favourites
  - From above 4 pages, users can select a cocktail as favourite.
  - it will be saved on the redux store
  - we store those favourite data in the localStorage as well via redux-persist
    - this will help the user to see the previously selected favourite list even after page refresh
  - With a common store, with a common method we show the favourite items all over the site with a filled heart icon.
  - This page shows only the selected items as favourite.

### Developer checklists
- [x] use redux as a state management lib
- [x] use only latest functional components and hooks
- [x] handle loading uis
- [x] handle error uis
- [x] Use React lazy loading for code splitting and improve loading speed.
- [x] handle not found / empty pages correctly
- [x] unit test coverage up to 98%
- [x] separate component as functional and UI only
- [x] Use SCSS tricks to simplify styling
- [ ] make the website responsive and mobile friendly
