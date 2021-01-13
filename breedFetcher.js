const request = require("request");
const argv = process.argv[2];


let obj;
let race = argv;
let id;
request(`https://api.thecatapi.com/v1/breeds/search/?q=${race} `, (error, response, body) => {
  response = body;
  if (error) {
    return console.log(error);
  }
  obj = JSON.parse(response);
  id = obj[0];
  if (id === undefined) {
    console.log("Breed not found try again !!!");
  } else {
    console.log(id.description);
  }
 
});




//[{"breeds":[],"id":"ee6","url":"https://cdn2.thecatapi.com/images/ee6.jpg","width":460,"height":276}]