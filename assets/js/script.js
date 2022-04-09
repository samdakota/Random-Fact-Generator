var categoryContainerEl = document.getElementById("category-container");
var newFactContainerEl = document.getElementById("fact-container");
var savedFactContainerEl = document.getElementById("saved-fact-container");

// Buttons
var saveFactBtn = document.getElementById("save-fact");
var newFactBtn = document.getElementById("new-fact");
var savedFactBtn = document.getElementById("saved-fact");
newFactBtn.addEventListener("click", newFact);

const categoriesObj = {
  Numbers: "http://numbersapi.com/random",
  Cats: "https://cat-fact.herokuapp.com/facts",
};

// Generate category buttons
const categories = [
  {
    name: "Numbers",
    API: "http://numbersapi.com/random",
  },
  {
    name: "Cats",
    API: "https://cat-fact.herokuapp.com/facts",
  },
];

document.addEventListener("click", function (event) {
  if (event.target.className === "fact-button") {
    var id = event.target.id;
    displayNewFact(categoriesObj[id], id);
  }
});

function createCategoryBtns() {
  for (var key in categoriesObj) {
    var categoryButton = document.createElement("button");
    categoryButton.setAttribute("class", "fact-button");
    categoryButton.setAttribute("id", key);
    categoryButton.textContent = key;
    categoryContainerEl.appendChild(categoryButton);
  }
}
createCategoryBtns();

function newFact() {
  console.log("test");
  categoryContainerEl.removeAttribute("class", "hide");
  newFactBtn.setAttribute("class", "hide");
  saveFactBtn.setAttribute("class", "hide");
  newFactContainerEl.setAttribute("class", "hide");
}

function displayNewFact(api_url, kind) {
  var newFactEl = document.createElement("h1");
  fetch(api_url)
    .then(function (response) {
      if (kind === "Cats") {
        return response.json();
      } else {
        return response.text();
      }
    })
    .then(function (data) {
      if (kind === "Cats") {
        var newCatFact = data[randomNumber()].text;
        newFactEl.textContent = newCatFact;
      } else {
        var newNumberFact = data;
        newFactEl.textContent = newNumberFact;
      }
      newFactContainerEl.innerHTML = "";
      newFactContainerEl.appendChild(newFactEl);
      newFactContainerEl.removeAttribute("class", "hide");
      categoryContainerEl.setAttribute("class", "hide");
      newFactBtn.removeAttribute("class", "hide");
      saveFactBtn.removeAttribute("class", "hide");
    });
}
//Info for Numbers API
var options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    "X-RapidAPI-Key": "9c10ec6a12msh0d77185cdbaed53p1dfbb3jsn659430c1bc12",
  },
};

// Create random number for cat fact
function randomNumber() {
  return Math.floor(Math.random() * 5);
}

// function createSavedFactEl() {
//   var savedFact = document.createElement("li");
//   savedFact.textContent =
// }

// function displaySavedFacts() {
//   var savedFacts = localStorage.getItem('facts');
//   for (let i = 0; i < savedFacts.length; i++) {
//     createSavedFactEl(savedFacts[i]);
//   }
// }
