/* <img class="contentIMG" src="images/dogs/bulldog-g01a240b28_1920.jpg" alt="" srcset="" /> */

function clearImages() {
	const images = document.getElementById("imgs");
	while (images.firstChild) {
		images.removeChild(images.firstChild);
	}
}
// images\dogs\dog1.jpg
function showDogs() {
	const category = document.getElementById("category");
	clearImages();
	const images = document.getElementById("imgs");
	const button = document.getElementById("dogButton");
	const file = "images/dogs/dog";

	for (let i = 1; i <= 5; i++) {
		const img = document.createElement("img");
		img.src = file + i + ".jpg";
		img.classList.add("contentIMG");
		images.appendChild(img);

		const oldButton = document.getElementsByClassName("highlighted");
		oldButton[0].classList.remove("highlighted");
		button.classList.add("highlighted");

		category.innerText = "Dog";
	}
}

function showCats() {
	const category = document.getElementById("category");
	clearImages();
	const images = document.getElementById("imgs");
	const button = document.getElementById("catsButton");
	const file = "images/cats/cat";

	for (let i = 1; i <= 5; i++) {
		const img = document.createElement("img");
		img.src = file + i + ".jpg";
		img.classList.add("contentIMG");
		images.appendChild(img);

		const oldButton = document.getElementsByClassName("highlighted");
		oldButton[0].classList.remove("highlighted");
		button.classList.add("highlighted");

		category.innerText = "Cat";
	}
}

function showRoosters() {
	const category = document.getElementById("category");
	clearImages();
	const images = document.getElementById("imgs");
	const button = document.getElementById("roostersButton");
	const file = "images/roosters/rooster";

	for (let i = 1; i <= 5; i++) {
		const img = document.createElement("img");
		img.src = file + i + ".jpg";
		img.classList.add("contentIMG");
		images.appendChild(img);

		const oldButton = document.getElementsByClassName("highlighted");
		oldButton[0].classList.remove("highlighted");
		button.classList.add("highlighted");

		category.innerText = "Rooster";
	}
}

function showBirds() {
	const category = document.getElementById("category");
	clearImages();
	const images = document.getElementById("imgs");
	const button = document.getElementById("birdsButton");
	const file = "images/birds/bird";

	for (let i = 1; i <= 5; i++) {
		const img = document.createElement("img");
		img.src = file + i + ".jpg";
		img.classList.add("contentIMG");
		images.appendChild(img);
	}

	const oldButton = document.getElementsByClassName("highlighted");
	oldButton[0].classList.remove("highlighted");
	button.classList.add("highlighted");

	category.innerText = "Bird";
}
