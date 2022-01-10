function supconditions(opp) {
	const time = new Date();	
	if (opp.value) {
				if (Date.parse(opp.value) > Date.parse(time)) {
					opp.style.border= "solid red 2px";
				} else {
					opp.style.border= "solid green 2px";
				} 

			} else {
				opp.style.border= "";
			}
}
function conditions(opp) {
	const time = new Date();
	supconditions(opp);
}

document.addEventListener('DOMContentLoaded', () => {

	//document.querySelector("#calculate").disabled = false;

	/*document.querySelector('#log_x').addEventListener('change', function() {
		if (document.querySelector('#log_x').checked) {
			
			console.log("eeee")	
		} else {
			console.log("aaaa")
		}

	});

	document.querySelector('#log_y').addEventListener('change', function() {
		if (document.querySelector('#log_y').checked) {
			
			console.log("eeee")	
		} else {
			console.log("aaaa")
		}

	});*/
	
	// Set limitation up to current date in a calendar
	for (let elem of document.querySelectorAll('input[type=date]')) {
		elem.setAttribute("max", new Date().toISOString().split('T')[0]);

		
		supconditions(elem);
	}
	
	document.querySelector('.LastActivity').addEventListener('change', function() {
		const time = new Date();
		if (document.querySelector('.LastActivity').value && document.querySelector('.registration').value) {
			if (Date.parse(document.querySelector('.LastActivity')).value <= Date.parse(time)) {
				if (Date.parse(document.querySelector('.registration')).value <= Date.parse(document.querySelector('.LastActivity')).value) {
					document.querySelector('.registration').style.border= "solid green 2px";
					document.querySelector('.LastActivity').style.border= "solid green 2px";
					document.querySelector('.registration').setAttribute("max", document.querySelector('.LastActivity')); 
				} else { document.querySelector('.registration').style.border= "solid red 2px";
					document.querySelector('.LastActivity').style.border= "solid green 2px";
				}
			} 
		else { 
			if (document.querySelector('.LastActivity').value) {
				if (Date.parse(document.querySelector('.LastActivity').value) <= Date.parse(time)) {
					document.querySelector('.LastActivity').style.border= "solid green 2px";
					document.querySelector('.registration').setAttribute("max", document.querySelector('.LastActivity')); 

				} else {
					document.querySelector('.LastActivity').style.border= "solid red 2px";
				}
			} else {
				if (Date.parse(document.querySelector('.registration').value) <= Date.parse(time)) {
					document.querySelector('.registration').style.border= "solid green 2px";
				} else {
					document.querySelector('.registration').style.border= "solid red 2px";
				}

			}

			}
	}
 });		
});






