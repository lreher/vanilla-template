# Vanilla Template

The absolute simplest way to build a Node project.

## What and Why

I got tired of building the same template to get simple projects started, so I wrote it for later!

Comes with:

- A bare bones server and router.
- Serves a simple client with a HTML, CSS and JS index file.
- Comes with browserify/watchify to let you use npm/modules in the client and speed up development.
- Loads spooky secrets with dotenv. 
- Thats it! 

Should be working, just add any code you want however you want, this template doesn't give a shit.

## How

#### Install dependencies

- `npm i` in the project
- `npm i` in the client


#### Set up dev environment

- Run the project with `node .` or `node index.js`
- Run `npm run watch` in the client to watch the index file. Any changes to the index.js or its modules are saved and bundled into bundle.js automatically.
- Access application on http://localhost:8080 