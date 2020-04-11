const express = require('express')
const app = express();

app.use(express.static('./dist/home-watcher-remake-front-end'));

app.get('/*', function(req, res) {
  res.sendFile(
    'index.html',
    {root: 'dist/home-watcher-remake-front-end/'}
  );
});

app.listen(process.env.PORT || 8080);

console.log('App listening for connections');