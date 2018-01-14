## Two pane file manager for the web.

Demo: [webfm.daemon-notes.com](https://webfm.daemon-notes.com)

Login/Password: guest/guest

# WebFM

* Backend is Sails v1 application on Node v8

  Custom ORM adapter is created for file system access. Basically I am using
  ORM models and queries to work with the shares and files.

  The rest is simple REST server accessed via WebSockets.
  
  Backend is under [api/](https://github.com/basarevych/webfm/tree/master/api)
  directory.

* Frontend is React/Redux on Bootstrap 4

  Fully responsive application created using Reactstrap, which is Bootstrap 4 for
  React, using custom CSS when needed (mainly flexgrid).

  Initial markup comes prepared on the server utilizing Server Side Rendering.

  Frontend is under [assets/js/](https://github.com/basarevych/webfm/tree/master/assets/js)
  directory.

* Everything is powered by JavaScript ES2017, native on Node and processed with
Babel/Webpack for the browser.

## License

MIT

## TODO

* Turn this React/Redux demo into a real application for everyday use.
