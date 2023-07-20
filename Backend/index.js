const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = require("../Backend/models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

require("../Backend/routes/routes.js")(app);


app.listen(2000,() => {
    console.log('running server');
});