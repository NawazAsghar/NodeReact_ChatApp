const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put("https://api.chatengine.io/users/",
                                {username: username, secret: username, first_name: username},
                                {headers: {"private-key": "b8c8ce26-cff4-490e-a566-67f017c1550d"}})
    return res.status(r.status).json(r.data)
  } catch (e) {
    return res.status(e.response.status).json(e.response.data)
  }
//   return res.json({ username: username, secret: "sha256..." });
});

// app.listen(3001);
app.listen(3001, () => {
  console.log(`Server running at....`);
});



// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });