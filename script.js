const buttonRetention = document.getElementById('buttonRetention');


function showModalWin() {
    const darkLayer = document.createElement('div');
	darkLayer.id = 'shadow';
	darkLayer.title = 'click to close';
	document.body.appendChild(darkLayer);
	const modalWin = document.getElementById('popupWin');
    modalWin.style.display = 'block';
    
    
    buttonRetention.value = 'Show Retention';
       
    const img = document.createElement('img');
    let i=1;

    const  numberAttempts = document.getElementById('numberAttempts');

    numberAttempts.innerHTML = `You have ${4-i} attempt(s)`;

    buttonRetention.onclick = function () {
    	if (i > 3) {
    		darkLayer.parentNode.removeChild(darkLayer);
	        modalWin.style.display = 'none';
	        img.style.display = 'none';
	        return false;
    	};

    	if (i===3) { 
    		buttonRetention.value = 'Close';
    	};

    	numberAttempts.innerHTML = `loarding...`;
 	 	
    	fetch('https://api.tachyon-analytics.com/predict/', {
    		method: 'POST',
    		body: new FormData(form_prediction),
    	})
    	.then(res => res.json())
    	.then(json => {
    		let imgURL ='https://api.tachyon-analytics.com/predict/'+json.url;
    		img.src = imgURL;
    		img.style.display = 'block';
    		img.title = 'click to close';
    		img.classList.add('img_prediction');
    		modalWin.before(img);
    		i++;
    		
			img.addEventListener('click', ()=> {
    			img.style.display = 'none';
    			numberAttempts.innerHTML = `You have ${4-i} attempt(s)`;
    		});
    	})
    	.catch((err) => {
			let p = document.createElement('p');
			p.innerHTML='"Информация не доступна"';
			modalWin.before(p);
		});
    };

    darkLayer.onclick = function () {
		darkLayer.parentNode.removeChild(darkLayer);
	    modalWin.style.display = 'none';
	    img.style.display = 'none';
	    return false;
	};
}
