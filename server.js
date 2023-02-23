const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/dist/personal-website"));

// Redirect HTTP to HTTPS
app.use((req, res, next) => {
  if (req.protocol === "http") {
    console.log("Redirecting to https://" + req.headers.host + req.url);
    res.redirect("https://" + req.headers.host + req.url);
  } else {
    next();
  }
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/personal-website/index.html"));
});
app.listen(process.env.PORT || 8080);
