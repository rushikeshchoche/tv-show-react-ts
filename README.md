# TV show React App

This project is a Tv show application based on React to view "Powerpuff Girls" show details and its episodes.

## Description

The application has two main pages (routes): Home page which is a details page for the TV show "Powerpuff Girls", and an episode detail page with information about specific episodes.


## Project Structure

```bash
├── src
│   ├── components
│   │   ├── Card/Card.tsx                     # Displays show and episode details card
│   │   ├── EpisodeCard/EpisodeCard.txs       # Displays Episode card inside a list
│   │   ├── EpisodeDetails/EpisodeDetails.txs # Episode Details Page Component
│   │   ├── EpisodeList/EpisodeList.txs       # Displays Episode List with all cards
│   │   ├── Home/Home.tsx                     # Home Page Component
│   │   ├── layout/                           # App layout - header, footer and content
│   │   ├── NotFound/NotFound/tsx             # Displays Page not found error
│   │   ├── Skeletons/                        # Loading skeleton components
│   ├── utils                                 # Contains helper util functions
│   │   ├── config.ts                         # api url config for all envs
│   │   ├── constants.ts                      # constants used in app
│   │   ├── helper.ts                         # helper functions
│   ├── redux                                 # Contains redux store
│   │   ├── episodeDetailsSlice.ts            # EpisodeDetailsReducer which get episode data.
│   │   ├── hooks.ts                          # Typed hooks with AppSelector and AppDispath.
│   │   ├── showSlice.ts                      # ShowReducer which get show data.
│   │   ├── store.ts                          # Reactjs toolkit with configureStore.
│   ├── service/                              # contains service to get show and episode details
│   ├── type/                                 # data types for Show, Episode and Path
│   ├── App.tsx                               # This is the root component of the application
│   ├── index.tsx                             # ReactDOM.render is called
```

## Get started

### Clone the repo

```shell
git clone https://github.com/rushikeshchoche/tv-show-react-ts
cd tv-show-react-ts
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

The `npm start` runs the application with watch mode on port `3000`.

Shut it down manually with `Ctrl+C`.

#### npm scripts

These are the commands defined in `package.json`:

* `npm start` - Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
* `npm run build` - Builds the app. The build artifacts will be stored in the `build/` directory.
* `npm test` - Executes the unit tests in the interactive watch mode.
* `npm run lint` - Runs linting.
