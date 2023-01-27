const express = require("express");
const app = express();
var os = require("os");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const server = require("http").Server(app);

var osu = require("node-os-utils");
var cpu = osu.cpu;
console.log(require("os").userInfo().username);

var _ = require("lodash");
var ps = require("current-processes");

app.get("/user", (req, res) => {
  const username = process.env.USERPROFILE;
  console.log(`Username: {username}`);
  res.send(`{username}`);
});

setInterval(() => {
  app.get("/details", (req, res) => {
    cpu.free().then((info) => {
      res.send("Free CPU Percentage : " + info + " %");
      //console.log(res);
    });
  });
}, 2000);

setInterval(() => {
  app.get("/list", (req, res) => {
    ps.get(function (err, processes) {
      if (err) {
        console.log(err);
        return;
      }
      let filtered = processes.filter((process) => process.cpu > 10);
      let sorted = _.sortBy(filtered, "cpu");
      let topProcesses = sorted.reverse().splice(0);
      res.send(topProcesses);
      console.log(topProcesses);
    });
  });
}, 5000);

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
