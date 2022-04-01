
//fetch requests to both APIs - ROB
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
		'X-RapidAPI-Key': '9c10ec6a12msh0d77185cdbaed53p1dfbb3jsn659430c1bc12'
	}
};

//Random Number fact
fetch('https://numbersapi.p.rapidapi.com/50/trivia?fragment=true&notfound=floor&json=true', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    
//Random Cat fact
fetch('https://cat-fact.herokuapp.com/facts')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.log(err));