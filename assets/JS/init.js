// Enable Bootstrap popovers
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  	return new bootstrap.Popover(popoverTriggerEl)
});


// Enable Animated On Scroll
window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
});

window.addEventListener('load', () => {
	const skillBarsDiv_right = document.getElementById("skillBarsDivRightColumn_id");
	const skillBarsDiv_left = document.getElementById("skillBarsDivLeftColumn_id");
	let useLeft = true; 
	function getBarColumnDiv() {
		let div = null;
		if (useLeft) {
			div = skillBarsDiv_left
		} else {
			div = skillBarsDiv_right;
		};

		useLeft = !useLeft;
		return div;
	};


	skills.forEach(
		(skill) => {
			const columnDiv = getBarColumnDiv();
			const barRowDiv = document.createElement("div");
			columnDiv.appendChild(barRowDiv);

			const progressDiv = document.createElement("div");
			progressDiv.classList.add("progress");
			

			const barDiv = document.createElement("div");
			barDiv.classList.add("progress-bar");
			barDiv.setAttribute("aria-valuenow",skill.rating);
			barDiv.setAttribute("aria-valuemax","100");
			barDiv.setAttribute("aria-valuemin","0");
			barDiv.setAttribute("role","progressbar");
			progressDiv.classList.add("skillBar");

			const skillNameParagraph = document.createElement("p");
			skillNameParagraph.textContent = `${skill.title}`;
			skillNameParagraph.classList.add("skillBar-name");

			barDiv.style = `width: ${skill.rating}%`;
			barDiv.textContent = `${skill.rating}%`;
			
			barRowDiv.appendChild(skillNameParagraph);
			barRowDiv.appendChild(progressDiv);
			progressDiv.appendChild(barDiv);
			
		}
	);
});