const fs = require('fs')
const express = require('express')
const { Nuxt, Builder } = require('nuxt')

const isProd = (process.env.NODE_ENV === 'production')
const port = process.env.PORT || 3000

// We instantiate Nuxt.js with the options
const config = require('./nuxt.config.js')
config.dev = !isProd
const nuxt = new Nuxt(config)

const app = express()

// Render every route with Nuxt.js
app.use(nuxt.render)

// Build only in dev mode with hot-reloading
// to create cert file run
if (config.dev) {
  const https = require('https')
  new Builder(nuxt).build()
    .then(function () {
      https.createServer({
        key: fs.readFileSync('server.key'),
        cert: fs.readFileSync('server.cert')
      }, app)
        .listen(3000, () => console.log(`Server listening on 'https://localhost:${port}'.`))
    })
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}
else {
  app.listen(port, '0.0.0.0')
}
