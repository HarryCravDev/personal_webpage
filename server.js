const express = require("express");
const path = require("path");
const app = express();

function init() {
  try {
    app.use(express.static(__dirname + "/dist/personal-website"));

    app.get("/*", function (req, res) {
      res.sendFile(path.join(__dirname + "/dist/personal-website/index.html"));
    });

    app.listen(process.env.PORT || 8080);
  } catch (error) {
    console.log("Error: ", error);
  }
}

init();
