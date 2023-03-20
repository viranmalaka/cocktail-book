# Cocktail Book

### Tech
- created by create-react-app (typescript)

### Plan
- 3 pages -> Home, search and favourites
- use routes to pages.

- Common Components
  - Tile / Card to show the minimized information of a cocktail

- Home
  - load random 5 apis 
  - Refresh button should reload the same
  - handle api loading issues.
  - use common component to show the list of result
  - Show images (use different sizes of image)
  
- Search
  - API support multiple search critiers (name, ingredient,alcoholic, category)
  - show the search query in the URL

- Favourites
  - Data should be saved on the localstorage
  - the favourited items should be indicated all over the site with heart icon
  - users can make a item favourite from anywhere in the site. 
  - show the list of selected items in one place. 

key checklists
- responsiveness
- use redux as a state management lib
- use only latest functional components and hooks
- handle loading uis
- handle error uis
- handle not found / empty pages correctly
- 