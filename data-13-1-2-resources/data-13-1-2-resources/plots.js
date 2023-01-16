// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);
//Plotly.newPlot("plotArea", [{x: [100, 200, 300], y: [10, 20, 30, 40, 50]}]);

// Plot
// 13.1.3
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};

var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};

Plotly.newPlot("plotArea", [trace], layout);

// Bar Chart
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
   };
   var data = [trace];
   var layout = {
    title: "'Bar' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("plotArea", data, layout);

// Pie Chart 
// 13.1.4
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
       "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
  };
  var data = [trace];
  var layout = {
    title: "'Pie' Chart",
  };
  Plotly.newPlot("plotArea", data, layout);

  // Scatter Plot 
//   var trace = {
// var xArray: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//        "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
// var yArray: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   };
//   var data = [{
//     x: xArray, 
//     y: yArray, 
//     mode: 'markers',
//   }];
//   var layout = {
//     xaxis: {range: [], title: "Drinks"}
//     yaxis: {range: [25, 4], title: "% of Drinks Ordered"},
//     title: "Scatter Plot",
//   };
//   Plotly.newPlot("plotArea", data, layout);

var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    mode: 'markers',
    type: 'scatter'
};
var data =[trace];
Plotly.newPlot("plotArea", data);

// 13.2.1 Functional JavaScript

// Double numbers in array
// Ex 1
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

// Ex 2
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(integer) {
  return integer * 2;
  });
console.log(doubled);

// Ex 3
var numbers = [1,2,3,4,5];  
var doubled = numbers.map(function(carPrice) {
  return carPrice * 2;
  });
console.log(doubled);

// Capitalize words in array
let words = ['these', 'words', 'need', 'capitalized']
let caps = words.map(word => word.toUpperCase())
console.log(caps)

// Square numbers in array
let numbers2 = [1, 2, 3, 4, 5];
let squared = numbers2.map(number => number*number)
console.log(squared);

// Add 5 to each element in array
var numbers3 = [1, 2, 3, 4, 5];
var addfive = numbers3.map(function(num){
    return num + 5;
});
console.log(addfive);

// Use Map() to extract the city from each object in array.
var cities = [
  {
    "Rank": 1,
    "City": "San Antonio ",
    "State": "Texas",
    "Increase_from_2016": "24208",
    "population": "1511946"
  },
  {
    "Rank": 2,
    "City": "Phoenix ",
    "State": "Arizona",
    "Increase_from_2016": "24036",
    "population": "1626078"
  },
  {
    "Rank": 3,
    "City": "Dallas",
    "State": "Texas",
    "Increase_from_2016": "18935",
    "population": "1341075"
  }
];

var cityNames = cities.map(function(city){
  return city.City;
});
console.log(cityNames);

// Extract the population of each city
var population = [
  {
    "Rank": 1,
    "City": "San Antonio ",
    "State": "Texas",
    "Increase_from_2016": "24208",
    "population": "1511946"
  },
  {
    "Rank": 2,
    "City": "Phoenix ",
    "State": "Arizona",
    "Increase_from_2016": "24036",
    "population": "1626078"
  },
  {
    "Rank": 3,
    "City": "Dallas",
    "State": "Texas",
    "Increase_from_2016": "18935",
    "population": "1341075"
  }
];

var citypopulation = population.map(function(population){
  return population.population;
});
console.log(citypopulation);

// Filter() Method
// Create a new array with only even numbers from this array
let numbers4 = [13, 22, 36, 54, 55];
let evennumbers = numbers4.filter(number => number % 2 == 0)
console.log(evennumbers)

// Extract numbers > 1
var numbers = [1,2,3,4,5];
var larger = numbers.filter(function(num){
    return num > 1;
});
console.log(larger);

// Extract ages > 5
var familyAge = [2, 3, 39, 37, ,9];
var olderThanFive = familyAge.filter(function(age){
  return age > 5;
});
console.log(olderThanFive);

// Extract animal names that begin with 's'
var words2 = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var startsWithS = words2.filter((animal) => animal.startsWith("s"));
console.log(startsWithS);

// Anonymous function inside map & filter simplified as arrow function
var numbers = [1,2,3,4,5];
var doubled = numbers.map(num => num * 2);
console.log(doubled);

// Sort() function
var familyAge2 = [3,2,39,37,9];
var sortedAge = familyAge2.sort((a,b) => a - b);
console.log(sortedAge);

// Sort() function - Modified version 
var familyAge3 = [3,2,39,37,9];
var sortedAge = familyAge3.sort((anElement,anotherElement) => anElement -
anotherElement);
console.log(sortedAge);

// Sort array in ascending order 
var familyAge4 = [3,2,39,37,9];
sortedAge = familyAge4.sort((a,b) => b - a);
console.log(sortedAge);

// Slice() Method to get the first 2 elements in array [0,1]
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
console.log(slice1);

// Use slice() to select the first three elements of the words array
var words3 = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice1 = words3.slice(0,3);
console.log(slice1);

// Slice end of an array, omit the second argument (4th and 5th elements)
var words4 = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice1 = words4.slice(3, );
console.log(slice1);




