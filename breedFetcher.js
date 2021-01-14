
const request = require("request");

const fetchBreedDescription = function(breedName, callback) {



  
  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breedName} `, (error, response, body) => {
    response = body;
    if (error) {
      return error;
    }
    let obj = JSON.parse(response);
    let id = obj[0];
    if (id === undefined) {
      // execute the callback
      callback("Breed not found", null);
      // return callback = "Breed not found try again !!!";
    } else {
      callback(null, id.description);
    }
   
  });
};

module.exports = { fetchBreedDescription };

