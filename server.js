const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/m1p9meanfront-tovintsoa'));
app.get('/*',(req,res) =>
  res.sendFile('index.html',{root:'dist/m1p9meanfront-tovintsoa/'})
);
app.listen(process.env.PORT || 8080);
