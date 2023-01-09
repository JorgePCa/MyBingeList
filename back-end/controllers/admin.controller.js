// This page contains the methods that allow the admin to update the database
const db = require("../db/models");
const Category = db.Category; 

const axios = require("axios");

exports.updateCategories = async (req, res) => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
        params: {
            api_key: 'ab7fa3f792c17d4471d45e57473b8d62'
        }
        });
        console.log(URL);
        const dataJSON = response.data.genres;
        console.log(response.data.genres);
        for(let i = 0; i < dataJSON.length; i++){
            const genre = {
                definition: dataJSON[i].name,
                description: dataJSON[i].name
            };
            console.log(genre);

            // remove this part from user and category to work

            // console.log(req.body.name);

            // if (!req.body.name) {
            //     res.status(400).send({
            //       message: "Content can not be empty!"
            //     });
            //     return;
            // }
            
            Category.create(genre);
        };
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);    
    }

}