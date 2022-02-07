# Docker

To build and run docker in the background

```
docker-compose up -d 
or
docker compose up -d 

```


# Scripts
## Development

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


