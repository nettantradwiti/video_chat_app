const express = require("express");
const app = express();
const OpenTok = require("opentok");
const mongoose = require("mongoose");
const User = require("./models/user");

const port = 8000;

const API_KEY = 47243634;
const PROJECT_SECRET = "ce244ec5a73cd708546c11396a18dca8ae448a7d";

opentok = new OpenTok(API_KEY, PROJECT_SECRET);

mongoose
  .connect(
    "mongodb+srv://dwitisahoo:FrGIKJM88unvdWDT@cluster0.kxplt.mongodb.net/myTestDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen(port, () => {
      console.log("server is running on port" + port);
    });
  });

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/user", async (req, res) => {
  //   const user = new User({
  //     session: "9437948060",
  //   });

  opentok.createSession(async (err, session) => {
    if (err) return console.log(err);
    const sessionId = session.sessionId;

    // save the sessionId

    token = opentok.generateToken(sessionId);

    const user = new User({
      session: sessionId,
      token: token,
    });

    //  db.save('session', session.sessionId, done);
    await user.save();
  });

  //   await user.save();

  res.send("new api");
});
