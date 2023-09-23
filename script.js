function resetLabels(){
	const labelContainer = document.querySelector('.label-container');
	labelContainer.innerHTML = `
		<label class="label-style">Email address</label>
	`; 
};






// what happens if input validation is unsuccessful

function fail(input){
	const labelContainer = document.querySelector('.label-container');
	
	labelContainer.innerHTML = `
		<label class="label-style">Email address</label>
		<p class="label-style fail-label">Valid email required</p>
	`;
	
	labelContainer.classList.add('fail-label-container');
	
	input.classList.add('fail-input');
};






//what happens if input validation is successful

function success(inputValue){
	const main = document.querySelector('main');
	main.innerHTML = `
		<section class="success-main-content">
			<img class="success-icon" src="assets/images/icon-success.svg" alt="">
			
			<h2 class="main-content-title">Thanks for Subscribing!</h2>
			<p class="text-under-title">A confimation email has been sent to <br><strong>${inputValue}</strong>. Please open it and click the button inside to confirm your subscription.</p>
			
			<button class="submit">Dismiss message</button>
	`
};








function checkInputs(){
	const input = document.querySelector('input')
	const inputValue = input.value;

// checking if input is empty

	if(!inputValue){
		fail(input);
		return
	};
	
// checking if input contains a fullstop and a @ symbol or any spaces

	let containsDot = '';
	let containsAtCounter = 0;

	for(let i = 0; i < inputValue.length; i++) {
		
		if (inputValue[i] == ' ') {
			fail(input);
			return
		};
	
		if (inputValue[i] == '@') {
			containsAtCounter += 1;
		};

		if (inputValue[i] == '.') {
			containsDot = true;
		};
	};

	if (containsDot == true && containsAtCounter == 1) {
		success(inputValue);
		return
	};
	
	fail(input);
}