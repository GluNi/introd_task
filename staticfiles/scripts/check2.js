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
/*	if (opp.value) {
				if (opp.getAttribute('class').indexOf("LastActivity") !== -1) {

					document.querySelector(`.${opp.getAttribute('class').slice(0,3)} .registration`).setAttribute("max", opp.value);
					if (opp.value < document.querySelector(`.${opp.getAttribute('class').slice(0,3)} .registration`).value) {
						opp.style.border= "solid red 2px";
					}

				} else {
					document.querySelector(`.${opp.getAttribute('class').slice(0,3)} .LastActivity`).setAttribute("min", opp.value);
					if (opp.value > document.querySelector(`.${opp.getAttribute('class').slice(0,3)} .LastActivity`).value && document.querySelector(`.${opp.getAttribute('class').slice(0,3)} .LastActivity`).value) {
						opp.style.border= "solid red 2px";						
					}
				}
					} else {
						if (opp.getAttribute('class').indexOf("LastActivity") !== -1) {		
							document.querySelector(`.${opp.getAttribute('class').slice(0,3)} .registration`).setAttribute("max", time.toISOString().split('T')[0]); 
							if (Date.parse(document.querySelector(`.${e.target.getAttribute('class').slice(0,3)} .registration`).value) <= Date.parse(time)) {
								document.querySelector(`.${opp.getAttribute('class').slice(0,3)} .registration`).style.border= "solid green 2px";
							}

						} else {
							document.querySelector(`.${opp.getAttribute('class').slice(0,3)} .LastActivity`).setAttribute("min", ''); 
							if (Date.parse(document.querySelector(`.${opp.getAttribute('class').slice(0,3)} .LastActivity`).value) <= Date.parse(time)) {
								document.querySelector(`.${opp.getAttribute('class').slice(0,3)} .LastActivity`).style.border= "solid green 2px";
							}
						}
					}*/
}

document.addEventListener('DOMContentLoaded', () => {

	//document.querySelector("#calculate").disabled = false;

	document.querySelector('#log_x').addEventListener('change', function() {
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

	});
	
	// Set limitation up to current date in a calendar
	for (let elem of document.querySelectorAll('input[type=date]')) {
		elem.setAttribute("max", new Date().toISOString().split('T')[0]);

		/*if (document.querySelector(elem).style.border === "2px solid green") {
			u*=u
			document.querySelector("#save").disabled = false;
		}*/
		
		supconditions(elem);
	}
	
	
/*	document.querySelectorAll('input[type=date]').forEach(date => {		
		date.onchange = function (e) {
			
			conditions(e.target);			
		}
	});*/


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






