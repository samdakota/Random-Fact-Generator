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
    API:"",
  }
]

function createCategoryBtns() {
  for (let i = 0; i < categories.length; i++) {
    var categoryButton = document.createElement("button");
    categoryButton.onclick = displayNewFact;
    categoryButton.textContent = categories[i].name;
    categoryContainerEl.appendChild(categoryButton);
  }
}
createCategoryBtns();

function displayNewFact() {
  console.log("test");
  var newFact = document.createElement("h1");
  newFact.textContent = "response";
  newFactContainerEl.appendChild(newFact);
  categoryContainerEl.setAttribute("class", "hide");
}