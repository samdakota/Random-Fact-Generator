const quoteText = document.querySelector(".quote"),
speechBtn = document.querySelector(".speech"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter"),
facebookBtn = document.querySelector(".facebook"),
instagramBtn = document.querySelector(".instagram"),
synth = speechSynthesis;



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

instagramBtn.addEventListener("click", ()=>{
    let instaUrl = `https://instagram.com/intent/post?url=${quoteText.innerText}`;
    window.open(postUrl, "_blank");
});