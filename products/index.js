const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const landingFilepath = path.join(__dirname, "/builds/landing-bundle/");
const statementFilepath = path.join(__dirname, "/builds/statement-bundle/");

app.use("/statement-generator/static", express.static(path.join(statementFilepath, "/static/")));
app.use("/static", express.static(path.join(landingFilepath, "/static/")));
app.use("/statement-generator/static", express.static(statementFilepath));
app.use("/static", express.static(landingFilepath));

app.get("/statement-generator*", function (req, res) {
  res.sendFile(path.join(__dirname, "/builds/statement-bundle/index.html"));
});

app.get("/*", function (req, res) {
  const landingIndexFilepath = path.join(landingFilepath, "index.html");
  res.sendFile(landingIndexFilepath);
});

app.listen(port, () => {
  console.log(`App initialized at http://localhost:${port}`);
});
