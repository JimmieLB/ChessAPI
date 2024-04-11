const express = require('express');

let app = express();
let latestMove = "";
let players = 0;

app.use(express.json());

const IP = require('ip').address();
const PORT = 3000;

app.get("/", (req, res) => {
  console.log("REQUEST");
  res.send({move: latestMove});
});

app.get("/players", (req, res) => {
  console.log("PLAYERS REQUEST");
  players += 1;
  res.send({count: players-1});
});

app.post("/move", (req,res) => {
  console.log("MOVE INPUT")
  latestMove = req.body.move;
  console.log(req.body.move);
  res.sendStatus(200);
});

app.listen(PORT, '0.0.0.0', function() {
  console.log("Server Running...")
  console.log(`PORT: ${PORT} ADDRESS: ${IP}`);
});