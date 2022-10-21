# GGIA
> A browser-based, open-source European tool for the quantification of greenhouse gas emissions in planning.

The initial wireframes for Frontend can be found [here](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=GGIA.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1lvEclr5GNizXVlzGXiwtBMZ4mV6IZF8i%26export%3Ddownload) (this may or may not be updated upon the the design changes made in the future).

## Setup
The initial environment setup guide can be found [here](https://github.com/QGasSP/ggia-frontend/wiki/GGIA-Frontend-Setup) 

## Docker

This will build and run docker in the background and view in 
[browser](http://localhost:3000/) on port 3000
It will connect to the backend with prefix https://ggia.ulno.net

```
docker-compose up -d --build
```

## Docker Development

This will build and run the development docker in the background and view in
[browser](http://localhost:3001/) on port 3001
It will connect to the backend with prefix https://ggia-dev.ulno.net

```
docker-compose up -d --build
```

Careful, if you want to deploy this on your own server - you have to change the url for the backend in the Dockerfile in frontend_qgassp/Dockerfile.

IT shoudl look there something like this:
```
RUN ./buildWithPrefix https://myserver.onthe.net
CMD ["./serveBuild"]
```


## Scripts
### Development

(Make sure you are inside the frontend_qgassp folder for the following.)

Installs node-modules dependencies found in package.json
```
yarn install
```

To build and view storybook created UI components and pages in the [browser](http://localhost:6006/)

```
yarn build-storybook
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

Start a local version with the prefix given as parameter (in this case http://localhost:8000).
If no prefix is specified, the script also looks for a file named env_url_prefix that can include
the prefix url.
```
./startWithPrefix http://localhost:8000
```

