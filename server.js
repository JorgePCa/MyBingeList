const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const path = require('path');
const axios = require('axios');
import {users} from 'api';
import { getUserById } from './api/crud/users';

app.use(cors());

app.get('/getUser', (req, res) => {
   getUser();
})

app.get('/giphy', (req, res) => {
   console.log(`Searching for a gif with the term: ${req.query.term}`);

   let params = req.query.term.replace(/ /g, '+');
   params += '&api_key=wR3d3hUEPKl4V0PIQgN5vLbSG9HJiFw7';
   params += '&limit=10';

   axios.get(`https://api.giphy.com/v1/gifs/search?q=${params}`)
   .then(function (response) {
      res.send({
         success: true,
         data: response.data.data
      })
   })
   .catch(function (error) {
      res.send({
         success: false,
         data: []
      })
   });
 });

app.use(express.static('public'));
app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(port, () => {
   console.log(`Server is up at port ${port}`);
});

