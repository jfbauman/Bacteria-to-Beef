// 13.3.2

// const url = "https://api.spacexdata.com/v2/launchpads";
d3.json("samples.json").then(function(data){
    console.log("hello");
});

// Print a message to  console
    console.log("goodbye");

// Print entire dataset to the console
d3.json("samples.json").then(function(data){
    console.log(data);
});

// extract only the wfreq (weekly belly button washing frequency) 
// of each person into a new array
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// Sort the wfreq array in descending order
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

// Delete null values from the sorted wfreq array
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

// return key-value pairs of an object as arrays
// ??
researcher1 = {
    name: 'Roza',
    age: 34,
    hobby: 'Hiking'
};
console.log(Object.entries(researcher1));

// print to the console each trait and corresponding property
researcher1 = [['name', 'Roza'], ['age', 34], ['hobby',
'Hiking']];
researcher1.forEach(([first, second]) => console.log(first
    + ": " + second));

// display the metadata of any individual from the dataset
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
        {console.log(key + ': ' + value);});
});




