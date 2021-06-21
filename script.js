fetch('https://api.tachyon-analytics.com/predict')
	.then((res) => res.json())
	.then((json) => {
		console.log(json);
	})
	.catch((err) => {
		let p = document.createElement('p');
		p.innerHTML='"Информация о пользователе не доступна"';
		document.body.append(p);
	});