# GGIA
> A browser-based, open-source European tool for the quantification of greenhouse gas emissions in planning.

## Setup
The initial environement setup guide can be found [here](https://github.com/QGasSP/ggia-frontend/wiki/GGIA-Frontend-Setup) 

## Docker

To build and run docker in the background and view in [browser](http://localhost:3000/)

```
docker-compose up -d 
or
docker compose up -d 

```


## Scripts
### Development

Installs node-modules dependencies found in package.json
```
yarn install
```

To build and view storybook created UI components and pages in the [browser](http://localhost:6006/)

```
yarn build-storybook`
yarn storybook
```

Checks for bugs or inconsistencies in code
```
yarn lint
```

Formats all the files using prettier and sort package-json dependencies alphabetically
``` 
yarn format
npx sort-package-json
```
Upgrade storybook
```
npx sb upgrade`
```


