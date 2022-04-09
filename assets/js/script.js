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

document.addEventListener("click", function (event) {
  if (event.target.className === "fact-button button is-fullwidth") {
    var id = event.target.id;
    displayNewFact(categoriesObj[id], id);
  }
});

function createCategoryBtns() {
  for (var key in categoriesObj) {
    var categoryButton = document.createElement("button");
    categoryButton.setAttribute("class", "fact-button button is-fullwidth");
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
      newFactContainerEl.setAttribute("class", "card")
      categoryContainerEl.setAttribute("class", "hide");
      newFactBtn.removeAttribute("class", "hide");
      saveFactBtn.removeAttribute("class", "hide");
    });
}

// Create random number for cat fact
function randomNumber() {
  return Math.floor(Math.random() * 5);
}

// speechBtn.addEventListener("click", ()=>{
//   if(!quoteBtn.classList.contains("loading")){
//       let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
//       synth.speak(utterance);
//       setInterval(()=>{
//           !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
//       }, 10);
//   }
// });

// copyBtn.addEventListener("click", ()=>{
//   navigator.clipboard.writeText(quoteText.innerText);
// });

// twitterBtn.addEventListener("click", ()=>{
//   let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
//   window.open(tweetUrl, "_blank");
// });
// facebookBtn.addEventListener("click", ()=>{
//   let postUrl = `https://www.facebook.com/sharer/sharer.php?url=${quoteText.innerText}`;
//   window.open(postUrl, "_blank");
// });

//instagramBtn.addEventListener("click", ()=>{
//     let instaUrl = `https://instagram.com/intent/post?url=${quoteText.innerText}`;
//     window.open(postUrl, "_blank");
// });

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
