# GGIA
> A browser-based, open-source European tool for the quantification of greenhouse gas emissions in planning.

The initial weireframes for Frontend can be found [here](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=GGIA.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1lvEclr5GNizXVlzGXiwtBMZ4mV6IZF8i%26export%3Ddownload) (this may or may not be updated upon the the design changes made in the future)

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


