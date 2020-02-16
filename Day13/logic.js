const images = document.querySelectorAll('img');

// THIS IS A DEBOUNCE FUNCTION SO THAT OUR SCROLL EVENT IS NOT TRIGGERED SO OFTEN
function debounce(func, wait = 10, immediate = true) {
	var timeout;
	return function() {
		var context = this,
			args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

function checkSlide() {
	const bottomScreen = window.scrollY + window.innerHeight;
	const topScreen = window.scrollY;
	images.forEach((image) => {
		const bottomImage = image.offsetTop + image.offsetHeight;
		const halfImage = image.offsetTop + image.offsetHeight / 2;
		console.log(window.innerHeight);
		console.log(`The top of the screen is at ${topScreen}`);
		console.log(`The bottom of the screen is at ${bottomScreen}`);
		console.log(`The top of the image is at ${image.offsetTop}`);
		console.log(`The height of the image is ${image.offsetHeight}`);
		console.log(`The bottom of the image is ${bottomImage}`);

		if (bottomScreen > halfImage && topScreen < bottomImage) {
			image.classList.add('active');
		} else {
			image.classList.remove('active');
		}
	});
}

window.addEventListener('scroll', debounce(checkSlide));
