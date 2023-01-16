// 13.2.2 Practicing JavaScript Methods
// Verify that the data is correctly read in
console.log(cityGrowths);

// First Step - sort the cities by population growth
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();
console.log(sortedCities);

// Second Step - select only top five cities by population growth
var topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities);

// Create two arrays: 
// Array of city names
// Array of corresponding population growths - parseInt(city.Increase_from_2016)converts strings into integers
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
console.log(topFiveCityNames);
console.log(topFiveCityGrowths);

// Create Bar Chart with the Arrays
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

// Create Bar Chart of the seven largest cities by population

// Select only top 7 cities by population growth
var topSevenCities = sortedCities.slice(0,7);
console.log(topSevenCities);

// Create two arrays: 
// Array of city names
// Array of corresponding population growths - parseInt(city.Increase_from_2016)converts strings into integers
var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityGrowths = topSevenCities.map(city => parseInt(city.Increase_from_2016));
console.log(topSevenCityNames);
console.log(topSevenCityGrowths);

// Create Bar Chart with the Arrays
var trace = {
    x: topSevenCityNames,
    y: topSevenCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

