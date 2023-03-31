const express = require("express");
const Twitter = require("twitter-lite");
const cors = require("cors");

const app = express();

app.use(cors());

const client = new Twitter({
  subdomain: "api",
  consumer_key: "your_consumer_key",
  consumer_secret: "your_consumer_secret",
  access_token_key: "your_access_token_key",
  access_token_secret: "your_access_token_secret",
});

app.get("/followercount", (req, res) => {
  const screen_name = req.query.screen_name || "jorisrood";

  client
    .get("users/show", { screen_name })
    .then((user) => {
      console.log(`@${user.screen_name} has ${user.followers_count} followers.`);
      res.json({ count: user.followers_count });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(error);
    });
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
