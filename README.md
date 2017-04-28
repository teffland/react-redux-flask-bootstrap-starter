## Starting from Scratch Notes

* Have virtualenvwrapper and npm installed

## Setting up backend:

1. `mkvirtualenv react-redux-flask`
2. `pip install flask flask_restful`
3. Fill in server.py

* All requests that mention /api/ hit the flask backend
* Anything not mentioning /api/ will hit the react app
* During development, use `webpack --progress --watch` to recompile any changes to js


* We will bundle and compile code using webpack
*

1. `npm init`
2. Production dependencies`npm install --save react react-dom redux react-redux react-router react-router-redux react-tap-event-plugin redux-logger redux-thunk react-addons-transition-group react-addons-css-transition-group re`
3. Dev server `npm install --save-dev webpack webpack-dev-server`
4. Dev compilation and ES6 support `npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0`
5. Dev compilation of scss `sass-loader css-loader style-loader`

# This Boilerplate app does the following

* Set up simple demo components
* Setup redux
* Setup routing
* Setup basick flask server and rest backend
