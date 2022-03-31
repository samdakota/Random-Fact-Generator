const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
		'X-RapidAPI-Key': '9c10ec6a12msh0d77185cdbaed53p1dfbb3jsn659430c1bc12'
	}
};

fetch('https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    fetch('https://cat-fact.herokuapp.com/facts')
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.log(err));