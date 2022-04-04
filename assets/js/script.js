var categoryContainerEl = document.querySelector('#category-container')
var factContainerEl = document.querySelector('#fact-container')
var savedFactContainerEl = document.querySelector('#saved-fact-container')
var saveFactBtn = document.querySelector('#save-fact')
var newFactBtn = document.querySelector('#new-fact')
var savedFactBtn = document.querySelector('#saved-fact')

var getCatFactHandler = function(event) {
    event.preventDefault();

   getCatFact();
};

var getNumberFactHandler = function(event) {
    event.preventDefault();

    getNumberFact();
};

// //fetch requests to both APIs - ROB
// var options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
// 		'X-RapidAPI-Key': '9c10ec6a12msh0d77185cdbaed53p1dfbb3jsn659430c1bc12'
// 	}
// };

// //Random Number fact API
// fetch('https://numbersapi.p.rapidapi.com/50/trivia?fragment=true&notfound=floor&json=true', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
    
// //Random Cat fact API
// fetch('https://cat-fact.herokuapp.com/facts')
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.log(err));

var getNumberFact = function(data) {
    // format the github api url
    var numberApiUrl = 'https://numbersapi.p.rapidapi.com/50/trivia?fragment=true&notfound=floor&json=true' + options;
  
    // make a get request to url
    fetch(numberApiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            console.log(data);
            getNumberFact(data, options);
          });
        } else { //take this out at the end, just using to make sure it works
          alert("Error: " + response.statusText);
        }
      })
      .catch(function(error) { //take this out at the end, just using to make sure it works
        alert("Unable to connect to Number API");
      });
  };

  var getCatFact = function(data) {
    // format the github api url
    var catApiUrl = 'https://cat-fact.herokuapp.com/facts';
  
    // make a get request to url
    fetch(catApiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            console.log(data);
            getCatFact(data);
          });
        } else { //take this out at the end, just using to make sure it is working
          alert("Error: " + response.statusText);
        }
      })
      .catch(function(error) { //take this out at the end, just using to make sure it is working
        alert("Unable to connect to Cat API");
      });
  };

  var displayFact = function() {

  }
  //button clicked on fact category
  //call to API that was clicked
  //parse data to display fact
  //button for save fact
  //button listener to save fact to local storage
    //localStorage.setItem(""); save to local storage
    //localStorage.getItem(""); get it from local storage

