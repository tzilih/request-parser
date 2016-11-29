const express = require('express');
const parser = require('ua-parser-js');
const app = express();

app.listen(process.env.PORT || 5000, () => {
  console.log("app is running!");
});

app.get('/', (req, res) => {
  const language = req.get('accept-language');
  const short_language= language.substring(0,language.search(/,|;/));
  const ua = parser(req.headers['user-agent']);
  const software = ua.os.name + ' ' + ua.os.version;
  res.json({ipaddress: req.ip, language: short_language, software: software});
})

