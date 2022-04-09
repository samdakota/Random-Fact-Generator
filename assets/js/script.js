const quoteText = document.querySelector(".quote"),
speechBtn = document.querySelector(".speech"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter"),
facebookBtn = document.querySelector(".facebook"),
instagramBtn = document.querySelector(".instagram"),
synth = speechSynthesis;

var categoryContainerEl = document.getElementById('category-container')
var newFactContainerEl = document.getElementById('fact-container')
var savedFactContainerEl = document.getElementById('saved-fact-container')

// Buttons
var saveFactBtn = document.getElementById('save-fact')
var newFactBtn = document.getElementById('new-fact')
var savedFactBtn = document.getElementById('saved-fact')


// Generate category buttons
const categories = [
  {
    name:"Numbers",
    API:"https://numbersapi.p.rapidapi.com/50/trivia?fragment=true&notfound=floor&json=true",

  },
  {
    name:"Cats",
    API:"https://cat-fact.herokuapp.com/facts",
  }
]

function createCategoryBtns() {
  for (let i = 0; i < categories.length; i++) {
    var categoryButton = document.createElement("button");
    categoryButton.onclick = displayNewCatFact;
    categoryButton.textContent = categories[i].name;
    if (categories[i].name == "Cats") {
      categoryButton.setAttribute("id", "cat-button")
    } else if (categories[i].name == "Numbers") {
      categoryButton.onclick = displayNewNumberFact;
    }
    //categoryContainerEl.appendChild(categoryButton);
  }
}
createCategoryBtns();

//Display Cat Fact
function displayNewCatFact() {
  var newCatFactEl = document.createElement("h1");
  var catApiUrl = "https://cat-fact.herokuapp.com/facts";

  // Fetch request to url
  fetch(catApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var newCatFact = data[randomNumber()].text;
      newCatFactEl.textContent = newCatFact;
      newFactContainerEl.appendChild(newCatFactEl);
      categoryContainerEl.setAttribute("class", "hide");
      newFactBtn.removeAttribute("class", "hide");
      saveFactBtn.removeAttribute("class", "hide");
  });
}
//Display Number Fact
function displayNewNumberFact() {
  var newNumberFactEl = document.createElement("h1");
  var numberApiUrl = "https://numbersapi.p.rapidapi.com/50/trivia?fragment=true&notfound=floor&json=true";

  //Fetch request to url
  fetch(numberApiUrl, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var newNumberFact = data.text;
      newNumberFactEl.textContent = "50 is " + newNumberFact;
      newFactContainerEl.appendChild(newNumberFactEl);
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

speechBtn.addEventListener("click", ()=>{
    if(!quoteBtn.classList.contains("loading")){
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        synth.speak(utterance);
        setInterval(()=>{
            !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
        }, 10);
    }
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});
facebookBtn.addEventListener("click", ()=>{
    let postUrl = `https://www.facebook.com/sharer/sharer.php?url=${quoteText.innerText}`;
    window.open(postUrl, "_blank");
});

//instagramBtn.addEventListener("click", ()=>{
//     let instaUrl = `https://instagram.com/intent/post?url=${quoteText.innerText}`;
//     window.open(postUrl, "_blank");
// });