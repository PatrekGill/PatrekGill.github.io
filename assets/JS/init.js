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

// init skill bars list
window.addEventListener('load', () => {
	// sort skills by highest rated
	skills.sort((a,b) => {
		return b.rating - a.rating;
	});

	skills.forEach(
		(skill) => {
			if (skill.rating > 0) {
				PORT_fnc_skill_addBar(skill);

			} else {
				PORT_fnc_skills_addMisc(skill);

			}

		}
	);
});

