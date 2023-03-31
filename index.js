const express = require("express");
const Twitter = require("twitter-lite");

const app = express();

app.use(cors()); // add this line

const client = new Twitter({
  subdomain: "api",
  consumer_key: "7Oeq9yCjKP6unnpyjyuandmpm",
  consumer_secret: "uwFwqG5CYaHcZ05LSSZ6ZnouH1M1hmkpXXir0qWpk9I791hFr6",
  access_token_key: "28352103-3O9tWN8WfF1cd7lpqHNLAQ6o594YqSl73gF9SInjo",
  access_token_secret: "LV0rHEUYhfIopMx55FI3PipggWmSLS3VnJ4CGfmAtUivE",
});

app.get("/followercount", (req, res) => {
  client
    .get("users/show", { screen_name: "jorisrood" })
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


