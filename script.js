let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://api.tachyon-analytics.com/predict'
fetch(proxyUrl + targetUrl)
	.then((res) => res.json())
	.then((json) => {
		console.log(json);
	})
	.catch((err) => {
		let p = document.createElement('p');
		p.innerHTML='"Информация о пользователе не доступна"';
		document.body.append(p);
	});