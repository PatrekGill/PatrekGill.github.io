// Enable Bootstrap popovers
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  	return new bootstrap.Popover(popoverTriggerEl)
});

// function addPopoverToElement(
// 	element,
// 	title,
// 	contents,
// 	trigger,
// 	placment = "",
// 	container = "body"
// ) {
	
// };

// Enable Animated On Scroll
window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
});



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

function addMiscSkill(skill) {
	const miscList = document.getElementById("miscSkillsList_id");
	const listItem = document.createElement("li");
	const textDiv = document.createElement("div");
	
	// add icon
	const skillIcon = document.createElement("i");
	textDiv.appendChild(skillIcon);
	skillIcon.classList.value = skill.icon;
	skillIcon.classList.add("skillBar-icon");

	// add the skill title text
	const skillNameParagraph = document.createElement("p");
	skillNameParagraph.textContent = `${skill.title.toUpperCase()}`;
	skillNameParagraph.classList.add("skillBar-name");
	textDiv.appendChild(skillNameParagraph);

	listItem.appendChild(textDiv);
	miscList.appendChild(listItem);
};

function addSkillBar(skill) {
	// create div to hold the entirety of this skill's relevant stuff
	const columnDiv = getBarColumnDiv();
	const thisSkillDiv = document.createElement("div");
	thisSkillDiv.classList.add("skillBar-div");
	columnDiv.appendChild(thisSkillDiv);
	
	// create div for text and icon for the skill
	const textDiv = document.createElement("div");
	thisSkillDiv.appendChild(textDiv);

	// add the skill icon
	const skillIcon = document.createElement("i");
	textDiv.appendChild(skillIcon);
	skillIcon.classList.value = skill.icon;
	skillIcon.classList.add("skillBar-icon");

	// add the skill title text
	const skillNameParagraph = document.createElement("p");
	skillNameParagraph.textContent = `${skill.title.toUpperCase()}`;
	skillNameParagraph.classList.add("skillBar-name");
	textDiv.appendChild(skillNameParagraph);

	new bootstrap.Popover(thisSkillDiv,{
		trigger: "hover",
		placement: "top",
		title: skill.title,
		content: skill.description
	});
	
	// create "progress" div for progress bar
	const progressDiv = document.createElement("div");
	progressDiv.classList.add("progress");
	progressDiv.classList.add("skillBar");
	thisSkillDiv.appendChild(progressDiv);

	// create the actual progress-bar div
	const barDiv = document.createElement("div");
	barDiv.classList.add("progress-bar");
	barDiv.classList.add("skillBar-color");
	barDiv.classList.add("bg-gradient");
	barDiv.setAttribute("aria-valuenow",skill.rating);
	barDiv.setAttribute("aria-valuemax","100");
	barDiv.setAttribute("aria-valuemin","0");
	barDiv.setAttribute("role","progressbar");
	barDiv.style = `width: ${skill.rating}%`;
	barDiv.textContent = `${skill.rating}%`;

	progressDiv.appendChild(barDiv);
};

// init skill bars list
window.addEventListener('load', () => {
	// sort skills by highest rated
	skills.sort((a,b) => {
		return b.rating - a.rating;
	});

	skills.forEach(
		(skill) => {
			if (skill.rating > 0) {
				addSkillBar(skill);

			} else {
				addMiscSkill(skill);

			}

		}
	);
});

