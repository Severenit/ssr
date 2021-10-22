const path = require('path');
const Hapi = require('@hapi/hapi');

const port = process.env.PORT || 3000;

const FILES = /\.(js|js.map|woff|woff2|svg|bmp|jpg|jpeg|gif|png|ico|css)(\?v=\d+\.\d+\.\d+)?$/;

const PATH = {
  '/': 'index.html'
}

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

      return h.file(path.join(process.cwd(), 'dist', PATH[request.path]));
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
