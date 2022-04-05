var categoryContainerEl = document.querySelector('#category-container')
var factContainerEl = document.querySelector('#fact-container')
var savedFactContainerEl = document.querySelector('#saved-fact-container')
var saveFactBtn = document.querySelector('#save-fact')
var newFactBtn = document.querySelector('#new-fact')
var savedFactBtn = document.querySelector('#saved-fact')

// var getCatFactHandler = function(event) {

//    getCatFact();
// };

// var getNumberFactHandler = function(event) {

//     getNumberFact();
// };

//fetch requests to both APIs - ROB
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
		'X-RapidAPI-Key': '9c10ec6a12msh0d77185cdbaed53p1dfbb3jsn659430c1bc12'
	}
  // JSON.stringify(data),
  //JSON.parse(data)
};
//This works
//Random Number fact API
  fetch('https://numbersapi.p.rapidapi.com/50/trivia?fragment=true&notfound=floor&json=true', options)
  .then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });

//This works  
//Random Cat fact API
fetch('https://cat-fact.herokuapp.com/facts')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.log(err));
    

//This does not work
// var getNumberFact = function(data) {
//     // format the github api url
//     var numberApiUrl = 'https://numbersapi.p.rapidapi.com/50/trivia?fragment=true&notfound=floor&json=true' + options;
  
//     // make a get request to url
//     fetch(numberApiUrl)
//       .then(function(response) {
//           response.json().then(function(data) {
//             consol.log(data);
//           });
//   };

//This does not work
  // var getCatFact = function(data) {
  //   // format the github api url
  //   var catApiUrl = 'https://cat-fact.herokuapp.com/facts';
  
  //   // make a get request to url
  //   fetch(catApiUrl)
  //     .then(function(response) {
  //         response.json().then(function(data) {
  //           console.log(data);
  //         });
  // }

  // var displayFact = function() {
  //   factContainerEl.textContent = ""
  //   factContainerTitleEl.textContent = "Fun Fact:";

  //   var fact = data.list;
  //   console.log(length)
  //     for(var i = 5; i < data.length; i++) {
  //       var randomFact = document.createElement("p");
  //       factContainerEl.classList = "needs styling keywords from Bulma";
  //     };
  // }

  //Needs:
  //button for each category
  //call to API that was clicked (specific category)
  //parse data from fetch call to display fact on display fact page
  //button to save fact
  //button listener to save fact to local storage
    //localStorage.setItem(""); save to local storage
    //localStorage.getItem(""); get it from local storage
  //saved fact display page (create li)