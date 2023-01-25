const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const mysql = require("mysql2");
const axios = require("axios");
var cors = require('cors')

app.use(cors()) 

var pool = mysql.createPool({
  user: "root",
  host: "localhost",
  password: "R@s#1997",
  database: "Login",
});



app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  pool.query(
    "INSERT INTO users (username, password) VALUES (?,?)",
    [username, password]
    // (err, result) => {
    //   alert(err);
    // }
  );
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  pool.query(
    "SELECT * FROM users WHERE username=? AND password=?",
    [username, password],

    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
        console.log(result);
      } else {
        res.send({
          Message: "User is not found!",
        });
      }
    }
  );
});



async function getClientData() {
  try {
    const response1 = await axios.get("http://localhost:3002/details");
    const response2 = await axios.get("http://localhost:3002/list");
    const response3 = await axios.get("http://localhost:3002/user");
    console.log(response1.data);
    console.log(response2.data);
    console.log(response3.data);
  } catch (error) {
    console.log(error);
  }
}

getClientData();

server.listen(3001, () => {
  console.log("Server listening on port 3001");
});
