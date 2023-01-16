// 13.4.1
// d3.selectAll() method to create an event listener
// d3.selectAll("body").on("change", updatePage);
// //updatePage()function is called whenever there is a change to the HTML body
// function updatePage() {
//   var dropdownMenu = d3.selectAll("#selectOption").node();
//   var dropdownMenuID = dropdownMenu.id;
//   var selectedOption = dropdownMenu.value;

//   console.log(dropdownMenuID);
//   console.log(selectedOption);
//   console.log(d3.selectAll("#menu").node().id)
// };

// Skill Drill
// d3.selectAll() method to create an event listener
d3.selectAll("body").on("change", updatePage);
//updatePage()function is called whenever there is a change to the HTML body
function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

//   console.log(dropdownMenuID);
  console.log(selectedOption);
//   console.log(d3.selectAll("#menu").node().id)
};