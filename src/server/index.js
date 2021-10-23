import fs from 'fs';
const path = require('path');
const Hapi = require('@hapi/hapi');

import handlebars from 'handlebars';
import React from 'react';
import ReactDom from 'react-dom/server';
const { StaticRouter } = require( 'react-router-dom' );
import App from '../App';

const port = process.env.PORT || 3000;

const FILES = /\.(js|js.map|woff|woff2|svg|bmp|jpg|jpeg|gif|png|ico|css)(\?v=\d+\.\d+\.\d+)?$/;

const init = async () => {
  const server = Hapi.server({
    port,
  });

  await server.register(require('@hapi/inert'));

  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: (request, h) => {
      if (FILES.test(request.path)) {
        return h.file(path.join(process.cwd(), 'dist', request.path));
      }

      const pathToFile = path.join(process.cwd(), 'dist', 'index.html');
      const template = handlebars.compile(fs.readFileSync(pathToFile, 'utf8'));
      const result = ReactDom.renderToString(<StaticRouter location={request.path}><App /></StaticRouter>);

      const page = template({
        content: result,
      });

      return page;
    }
  })

  await server.start();
  console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
