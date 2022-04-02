
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
          response.json().then(function(text) {
            console.log(text);
            getNumberFact(data, options);
          });
        } else {
          alert("Error: " + response.statusText);
        }
      })
      .catch(function(error) {
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
          response.json().then(function(text) {
            console.log(text);
            getCatFact(text);
          });
        } else {
          alert("Error: " + response.statusText);
        }
      })
      .catch(function(error) {
        alert("Unable to connect to Cat API");
      });
  };
