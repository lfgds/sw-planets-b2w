# Desafio B2W

A challenge proposed by B2W in creating a game that search a random planet from Star Wars.

## Getting Started

### Instalation

First of all, install NodeJS to run this.

- [NodeJS](http://nodejs.org/)


# Clone this repository

```
$ git clone git@github.com:lfgds/sw-planets-b2w.git
$ cd sw-planets-b2w

#install dependencies
$ npm install

#start project
$ npm run serve

#access adress in the browser
http://localhost:8080/#/
```

### Folders and Files

```
├── node_modules
├── public
├── src
│   ├── assets
│   ├── compoments
│   ├── router
│   └── views
|       App.vue
|       main.js  
├── tests
│   ├── e2e
│   └── unit
|       .eslintrc.js
|       main.spec.js        
└── views
.gitignore
bagel.config.js
cypress.json
package.json
Readme.md
```

### How it Works

We have an API that return an Array of planets in results:
* GET https://swapi.co/api/planets/


```
{
    "count": 61,
	"next": "https://swapi.co/api/planets/?page=2",
	"previous": null,
	"results": [
		{...}, {...}, {...}
        ]
}
```

---

For to get an aleatory planet, we need a function with a random number for return this result:

```
let randomNumber = Math.floor(Math.random() * (61 - 1 + 1)) + 1;

* GET https://swapi.co/api/planets/ + randomNumber


//Exemple
{
	"name": "Tund",
	"rotation_period": "48",
	"orbital_period": "1770",
	"diameter": "12190",
	"climate": "unknown",
	"gravity": "unknown",
	"terrain": "barren, ash",
	"surface_water": "unknown",
	"population": "0",
	"residents": [
		"https://swapi.co/api/people/50/"
	],
	"films": [],
	"created": "2014-12-20T10:07:29.578000Z",
	"edited": "2014-12-20T20:58:18.489000Z",
	"url": "https://swapi.co/api/planets/41/"
}
```
### Tests

```
#run unit and e2e tests
$ npm run test
```
### Tasks

- `VueJS`: create components
- `Vue Router`: create routes
- `Axios`: request API
- `API`: https://swapi.co/
- `SASS`: organize style
- `Netlify`: deploy project
