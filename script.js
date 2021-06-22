function showModalWin() {
    var darkLayer = document.createElement('div');
    darkLayer.id = 'shadow';
    document.body.appendChild(darkLayer);
    var modalWin = document.getElementById('popupWin');
    modalWin.style.display = 'block';
    let returnedUsers = document.getElementById('users');
    let points = document.getElementById('points');
    let buttonRetention = document.getElementById('buttonRetention');

    buttonRetention.onclick= function () {
    	let body = {
     		returnedUsers: returnedUsers.value,
     		points: points.value,
    	};
    	
    	fetch('https://api.tachyon-analytics.com/predict/', {
    		method: 'POST',
    		body: JSON.stringify(body),
    	}).then(res => res.json())
    	.then(json => {
    		console.log(json);
    		let imgURL = json._url;
    		let img = document.createElement('img');
    		img.src = imgURL;
    		img.width = 200;
    		document.body.append(imgUser);
    	})
    	.catch((err) => {
			let p = document.createElement('p');
			p.innerHTML='"Информация не доступна"';
			document.body.append(p);
		});    	
    	console.log(JSON.stringify(body));
    }; 

    darkLayer.onclick = function () {
		darkLayer.parentNode.removeChild(darkLayer);
	    modalWin.style.display = 'none';
	    return false;
    };
}	