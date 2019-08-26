const { parse } = require('url');
const { join } = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const next = require('next');
const { addIndex, searchMatch } = require('./search');

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());

    server.post('/search/add', async (req, res) => {
      try {
        const respond = await addIndex(req.body);
        res.send({ success: true, respond });
      } catch (e) {
        console.log(e);
        res.send({ success: false });
      }
    });

    server.post('/search', async (req, res) => {
      const { key, value } = req.body;
      try {
        const respond = await searchMatch(key, value);
        res.send({ success: true, respond });
      } catch (e) {
        console.log(e);
        res.send({ success: false });
      }

    });

    server.use((req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;

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
