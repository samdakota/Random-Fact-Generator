var categoryContainerEl = document.getElementById('category-container')
var newFactContainerEl = document.getElementById('fact-container')
var savedFactContainerEl = document.getElementById('saved-fact-container')

// buttons
var saveFactBtn = document.getElementById('save-fact')
var newFactBtn = document.getElementById('new-fact')
var savedFactBtn = document.getElementById('saved-fact')

// generate category buttons
const categories = [
  {
    name:"Numbers",
    API:"",
  },
  {
    name:"Cats",
    API:"https://cat-fact.herokuapp.com/facts",
  }
]

function createCategoryBtns() {
  for (let i = 0; i < categories.length; i++) {
    var categoryButton = document.createElement("button");
    categoryButton.onclick = displayNewFact;
    categoryButton.textContent = categories[i].name;
    if (categories[i].name == "Cats") {
      categoryButton.setAttribute("id", "cat-button")
    } else if (categories[i].name == "Numbers") {
      categoryButton.setAttribute("id", "numbers-button");
    }
    categoryContainerEl.appendChild(categoryButton);
  }
}
createCategoryBtns();

function displayNewFact() {
  var newFactEl = document.createElement("h1");
  newFactEl.textContent = "response";
  newFactContainerEl.appendChild(newFactEl);
  categoryContainerEl.setAttribute("class", "hide");
  newFactBtn.removeAttribute("class", "hide");
  saveFactBtn.removeAttribute("class", "hide");
}

//fetch requests to both APIs
var options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    "X-RapidAPI-Key": "9c10ec6a12msh0d77185cdbaed53p1dfbb3jsn659430c1bc12",
  },
};

// create random number less than max value
function randomNumber(max) {
  var max = 10;
  return Math.floor(Math.random() * max);
}

var getNumberFact = function (number) {
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

var getCatFact = function () {
  var catApiUrl = "https://cat-fact.herokuapp.com/facts";

  // make a get request to url
  fetch(catApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
    // var newCatFact = data[randomNumber(10)].text;
    // console.log(newCatFact);
};
getCatFact();


