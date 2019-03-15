[![Netlify Status](https://api.netlify.com/api/v1/badges/8a91c235-7004-403c-9efb-2a3bc9065c70/deploy-status)](https://app.netlify.com/sites/kingdom-of-tripolis/deploys)

### Welcome to the [Kingdom of Tripolis](https://kingdom-of-tripolis.netlify.com/)

![Logo](https://github.com/rogierv-codaisseur/Kingdom-of-Tripolis/blob/master/screenshots/logo.png)

## What this project is about

![](KingdomOfTripolis.gif)

We built this game as a classic top-down rpg style puzzler.<br />
The aim of the game is to reach the Loot Chest first, while avoiding the skeletons.

## Table of contents:

- **[Technologies used](#technologies-used)**
- **[Goals for this project](#goals-for-this-project)**
- **[Game Rules](#game-rules)**
- **[Play Online or Run Locally](#play-online-or-run-locally)**
- **[GIT workflow](#git-workflow)**
- **[Agile workflow and trello board](#agile-workflow-and-trello-board)**

## Technologies used

The front-end was developed using `React` and `Redux`.<br />
The back-end was implimented using `Express` and `Websocket`.<br />

Please follow the links below to some samples:
- **[react](./client/src/components/player/movement.js)**  
- **[redux](./client/src/reducers/player.js)**  
- **[websocket](./server/index.js)**

## Goals for this project:

- To develop a full stack application using React/Redux and Websockets.
- Application should be online and have multiplayer capabilities.
- To develop a kick-ass game!

## Game Rules

- Player 1 - Use arrow keys to navigate around the map.
- Player 2 - Use W A S D to bavigate around the map.
- Avoid the Skeletons! They will only move once a player moves.
- Player will respawn at start when hit by an enemy.
- Plan your moves carefully OR run like a crazed bat out of hell.
- Be the first to claim the LOOT!

## Play Online or Run Locally

You can play the game online here: https://kingdom-of-tripolis.netlify.com/

Alternatively you can clone the repo and run everything locally.<br />
The `Server` is deployed to Heroku. If all dynos are running, you only need to run the `Client`.

```sh
cd client/
npm install
npm run start
```

If dynos have been stopped, you can run the `Server` locally:<br />
*NOTE: Run `Client` as mentioned above*

```sh
cd server/
npm install
npm run start
```

## GIT workflow

In this project we tried to use:

- Good commit messages
- Well named branches (which have been cleaned up and deleted after presentation)

Here is our branching model for this project:

```
master (auto deploys) ______________________
                       \               /
development             \_____________/- pull request
                         \           /
feature/some-feature      \_commits_/- pull request
```

## Agile workflow and Trello board

During the course of the project we applied some agile principles in the form of:

- Short sprints
- Daily standups
- Iterative and Incremental developments. 

We also used Trello to keep track of our project. Check out the board here: https://trello.com/b/NaFITuL1/kingdom-of-tripolis

## Contributors

Rogier Verkaik: https://github.com/rogierv-codaisseur<br />

Dusty Wood Saunders: https://github.com/dustywsaunders

## Credits

Music: http://freemusicarchive.org/music/Azureflux/<br />
Some sprites: https://candacis.wordpress.com/category/resources/tiles/<br />
Other sprites: https://opengameart.org/content/lpc-medieval-fantasy-character-sprites<br />
