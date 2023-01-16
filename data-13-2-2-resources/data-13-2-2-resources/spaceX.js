// 13.3.1 Inspect an API call with D3.json()

// API call to SpaceX 
//Tthe URL to the SpaceX
const url = "https://api.spacexdata.com/v4/launchpads";
// Call to SpaceX's API, retrieves the data & prints it to the browser console
d3.json(url).then(receivedData => console.log(receivedData));

// Retrieve details from Vandenberg Air Force Base
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0]));

// Retrieve latitude of the Vandenberg Airforce Base
// v4 code
//d3.json(url).then(spaceXResults =>
  //  console.log(spaceXResults[0].location.latitude));
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].latitude));

// Use then() to retrieve latitude and longitude coordinates of Vandenberg SpaceX launch station.
// v4 code
// d3.json(url).then(spaceXResults => 
//     console.log(spaceXResults[0].location.latitude, spaceXResults[0].location.longitude));
d3.json(url).then(spaceXResults => 
    console.log(spaceXResults[0].latitude, spaceXResults[0].longitude));

// Use then() to retrieve latitude and longitude coordinates of each SpaceX launch station.
    d3.json(url).then(spaceXResults => {
    for(var i = 0; i < 6; i++){
        console.log(spaceXResults[i].latitude, spaceXResults[i].longitude);
    }
});

// Retrieve Full Name of the Vandenberg Air Force Base
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// 13.3.2
// Retrieve data from an external data file, instead of a web API
const url = "https://api.spacexdata.com/v4/launchpads";
d3.json("samples.json").then(function(data){
    console.log("hello");
});