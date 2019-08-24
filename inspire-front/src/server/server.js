const {parse} = require('url');
const {join} = require('path');
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({dev});
const handle = app.getRequestHandler();


const proxyMiddleware = require('http-proxy-middleware');
const proxyConfig = {
  '/_api': {
    target: 'http://inspire-api:8000',
    pathRewrite: {'^/_api': '/'},
    changeOrigin: true,
  }
};

app.prepare()
  .then(() => {
    const server = express();

    Object.keys(proxyConfig).forEach(function (context) {
      server.use(proxyMiddleware(context, proxyConfig[context]))
    });

    server.use((req, res) => {
      const parsedUrl = parse(req.url, true);
      const {pathname} = parsedUrl;

      // PWA
      if (pathname === '/service-worker.js') {
        const filePath = join(__dirname, '../../.next', pathname);
        app.serveStatic(req, res, filePath);
      } else {
        handle(req, res, parsedUrl);
      }
    });
    server.listen(port, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:' + port)
    })
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1)
  });
