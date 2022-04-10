var categoryContainerEl = document.getElementById("category-container");
var newFactContainerEl = document.getElementById("fact-container");
var savedFactContainerEl = document.getElementById("saved-fact-container");
var mainHeader = document.getElementById("main-header");
var savedFactHeader = document.getElementById("saved-fact-header");

// Buttons
var saveFactBtn = document.getElementById("save-fact");
var newFactBtn = document.getElementById("new-fact");
var savedFactBtn = document.getElementById("saved-facts");
newFactBtn.addEventListener("click", newFact);

const categoriesObj = {
  Numbers: "http://numbersapi.com/random",
  Cats: "https://cat-fact.herokuapp.com/facts",
};

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
  categoryContainerEl.removeAttribute("class", "hide");
  newFactBtn.setAttribute("class", "hide");
  saveFactBtn.setAttribute("class", "hide");
  savedFactBtn.removeAttribute("class", "hide");
  newFactContainerEl.setAttribute("class", "hide");
  savedFactContainerEl.setAttribute("class", "hide");
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
      newFactContainerEl.setAttribute("id", "fact-text");
      newFactContainerEl.removeAttribute("class", "hide");
      categoryContainerEl.setAttribute("class", "hide");
      newFactBtn.removeAttribute("class", "hide");
      saveFactBtn.removeAttribute("class", "hide");
    });
}

// Create random number for cat fact
function randomNumber() {
  return Math.floor(Math.random() * 5);
}

saveFactBtn.addEventListener("click", saveFact);

// Save fact to localstorage
function saveFact() {
  var newFactText = document.getElementById("fact-text");
  localStorage.setItem("key", newFactText.textContent);
  console.log(localStorage);
}

//Code SamA showed us that I can't get to work :/
// function createSavedFactEl(fact, ol) {
//   var savedFact = document.createElement("li");
//   savedFact.textContent = fact;
//   ol.appendChild(savedFact);
// }

savedFactBtn.addEventListener("click", displaySavedFacts);

function displaySavedFacts() {
  mainHeader.setAttribute("class", "hide");
  savedFactHeader.removeAttribute("class", "hide");
  var savedFactList = document.createElement("ol");
  var savedFacts = localStorage.getItem("key");
  var displayedFact = document.createElement("li");
  displayedFact.textContent = savedFacts;
  savedFactList.appendChild(displayedFact);
  savedFactContainerEl.appendChild(savedFactList);
  savedFactContainerEl.removeAttribute("class", "hide");
  newFactContainerEl.setAttribute("class", "hide");
  categoryContainerEl.setAttribute("class", "hide");
  saveFactBtn.setAttribute("class", "hide");
  savedFactBtn.setAttribute("class", "hide");
  newFactBtn.removeAttribute("class", "hide");
}
