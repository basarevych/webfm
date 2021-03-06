## Two-pane file manager for the web.

Demo: [webfm.daemon-notes.com](https://webfm.daemon-notes.com)

Login/Password: guest/guest

# WebFM

* Backend is Sails v1 application on Node v8

  Custom ORM adapter is created for file system access. Basically, I am using
  ORM models and queries to work with the shares and files.

  The rest is simple REST server accessed via WebSockets.

  Backend is under [api/](https://github.com/basarevych/webfm/tree/master/api)
  directory.

* Frontend is React/Redux on Bootstrap 4

  Fully responsive application created using Reactstrap, which is Bootstrap 4 for
  React, using custom CSS when needed (mainly flexbox).

  Initial markup comes prepared on the server utilizing Server-Side Rendering.

  Frontend is under [assets/js/](https://github.com/basarevych/webfm/tree/master/assets/js)
  directory.

* Everything is powered by JavaScript ES2017, native on Node and processed with
Babel/Webpack for the browser.

## Installation

1. Install Node v8 and Redis according to your OS way of doing so.

2. Get the sources:

  ```
  # git clone https://github.com/basarevych/webfm
  # cd webfm
  # cp webfm.conf.example webfm.conf
  # yarn install --prod
  ```

  NOTE: If you are going to use **build** commands then remove **--prod** from the
  yarn arguments above.

  I recommend using [yarn](https://yarnpkg.com/en/) for the dependencies and
  [pm2](http://pm2.keymetrics.io/) for starting as system service.

  Edit the initial **webfm.conf** file, add your users and shares. User password is
SHA256 hash of a password actually - don't put the real password there. Shares
  are defined as items in read[] or write[] array of the user section. You will find
  the example in the config file.

3. Start

  Do **yarn start** or **npm start** to start the thing. To make it permanent you can
  do **pm2 start ./ecosystem.config.js** (this **ecosystem.config.js** file is in the
  repo).

## Development

In order to build production bundles use **yarn run build** (after that run **yarn start**
to start the server).

Development version is built using **yarn run build:dev**. Run **yarn run start:dev**
to start dev version of the server.

Development bundles are excluded from the repo, but production bundles should be
committed into it so you will not have to run **build** task on hosting server.

## License

MIT

## TODO

* Turn this React/Redux demo into a real application for everyday use.
