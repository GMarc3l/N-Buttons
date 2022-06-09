function addNumber() {
	let numberAdded = document.getElementById("nrAdded").value;
	const buttonloc = document.getElementById("buttonloc");
	const Winner = Math.floor(Math.random() * (numberAdded)) + 1;
	for(let i = 1; i <= numberAdded; ++i) {
		let createdBtn = document.createElement("button");
		let buttonClicked = numberAdded;
		createdBtn.innerHTML = i;
		createdBtn.type = "button";
		createdBtn.onclick = function() {
			if (Winner == buttonClicked + 1) {
				alert("You Won!");
			} else {
				alert("You Lost!")
			}
			location.reload();
		};
		
		buttonloc.appendChild(createdBtn);
		--buttonClicked;
	}
}
