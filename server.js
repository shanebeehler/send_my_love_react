const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080
var fb_app_id = process.env.FB_APP_ID
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build/index.html'));
});


app.listen(port);
console.log(fb_app_id);
