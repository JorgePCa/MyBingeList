const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

const db = require("./db/models");

const axios = require("axios");

var corsOptions = {
  origin: "http://localhost:5173"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

db.sequelize.sync();

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Binge List Server." });
});

require("./routes/user.routes")(app);
require("./routes/statusw.routes")(app);
require("./routes/admin.routes")(app);
require("./routes/category.routes")(app);
// require("./routes/type.routes")(app);
// require("./routes/media.routes")(app);
// require("./routes/usermedia.routes")(app);
// require("./routes/mediacategory.routes")(app);

app.get('/search', async (req, res) => {
  const query = req.query.q;
  const API_KEY = 'ab7fa3f792c17d4471d45e57473b8d62';
  // const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
  const URL = `https://api.themoviedb.org/3/movie/${query}?api_key=${API_KEY}&language=en-US`;

  try {
    const response = await axios.get(URL);
    console.log(URL);
    const dataJson = response.data;
    console.log(dataJson.genres);
    res.send(dataJson);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
