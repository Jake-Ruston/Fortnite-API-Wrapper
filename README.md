# Fortnite
A simple to use module for interacting with the Fortnite API.

## Install
```
$ npm install fortnite
```
## How to
```js
// require the package
const fortnite = require('fortnite');
```
## Methods
```js
fortnite('mrappi', 'pc').then(console.log);
```
- `username` is required and must be a string.
- `platform` is `pc` by default. Possible platforms are: `pc`, `xbox` `psn`.
