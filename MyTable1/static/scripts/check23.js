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
	/* document.querySelector('#log_x').addEventListener('change', function() {
		if (document.querySelector('#log_x').checked) {
			
			console.log("ee");	
		} else {
			console.log("aa");
		}

	});	*/

	d1 = document.querySelector('.registration');
	d2 = document.querySelector('.LastActivity');
	const now = new Date();	
	if (!(Date.parse(d1.value)<=Date.parse(d2.value) && Date.parse(d2.value)<=Date.parse(now))) {
		document.querySelector("#save").disabled = true;
	}	

	for (let elem of document.querySelectorAll('input[type=date]')) {
		elem.setAttribute("max", new Date().toISOString().split('T')[0]);
		elem.addEventListener('change', function() {
			if (Date.parse(d1.value)<=Date.parse(d2.value) && Date.parse(d2.value)<=Date.parse(now)) {				
				document.querySelector("#save").disabled = false;
			} else {				
				document.querySelector("#save").disabled = true;
			}
		});
	}	
});




	