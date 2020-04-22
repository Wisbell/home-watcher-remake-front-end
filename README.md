# <p align="center">Home Watcher Remake - Front End</p>

<p align="center"><a href="https://angular.io/" target="blank">Angular</a> application used to interact with <a href="https://github.com/Wisbell/home-watcher-nestjs-back-end#readme" target="blank">Home Watcher Api </a> and <a href="https://github.com/Wisbell/home-watcher-remake-rpi-server#readme" target="blank">Home Watcher Raspberry Pi Server</a></p>

## Installation

```bash
$ npm install
```

## Running the app
**In order to properly interface with the Raspberry Pi the environment (src/environments) variables must point to the host of the <a href="https://github.com/Wisbell/home-watcher-remake-rpi-server#readme" target="blank">Home Watcher Raspberry Pi Server</a></p>**

```bash
# development/watch mode
$ npm run start:dev

# NOTE: Run 'npm run build' before running production
# production mode
$ npm run start
```