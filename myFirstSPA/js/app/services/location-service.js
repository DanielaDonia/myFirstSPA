define(function() {
    var internals = {}; // internal state
    var externals = {}; // external api

    var base_url = "https://rickandmortyapi.com/api/location/";
   
var data;
// Use the 'fetch' function to make an asynchronous HTTP request to 'base_url'    
internals.location = fetch(base_url)
  // Parse the response as JSON
    .then((response) => { return response.json()})
    // Log the 'results' property of the response and store it in the 'data' variable
    .then((response) => { console.log(response.results) 
        data = response.results;
        return response.results;})

    // Declare an object called 'externals' to expose functions externally
    externals.getLocation = function(index, cb) {
         // Call the provided callback function with the film data at the specified index
        cb(data[index]);
        console.log(data[index])
    };
// Return the 'externals' object, which includes the 'getFilm' function
    return externals;

});