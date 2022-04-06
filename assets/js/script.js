//fetch requests to both APIs - ROB
var options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    "X-RapidAPI-Key": "9c10ec6a12msh0d77185cdbaed53p1dfbb3jsn659430c1bc12",
  },
};


var getNumberFact = function (number) {
  // format the github api url
  var numberApiUrl =
    "https://numbersapi.p.rapidapi.com/"+number+"/trivia?fragment=true&notfound=floor&json=true";

  // make a get request to url
  fetch(numberApiUrl, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
};
getNumberFact(50);


var getCatFact = function () {
  // format the github api url
  var catApiUrl = "https://cat-fact.herokuapp.com/facts";

  // make a get request to url
  fetch(catApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
};
getCatFact();

