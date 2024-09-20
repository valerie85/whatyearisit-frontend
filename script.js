fetch('https://whatyearisit-backend-smoky.vercel.app/year')
	.then(response => response.json())
	.then(data => {
        document.querySelector('#year').innerHTML = `
				<div id="year"> year: ${data.year} </div>`;
    });

