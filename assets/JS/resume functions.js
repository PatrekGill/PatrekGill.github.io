const resumeColumnDiv_right = document.getElementById("resumeDivRightColumn_id");
const resumeColumnDiv_left = document.getElementById("resumeDivLeftColumn_id");

let useLeft = true; 
const PORT_fnc_resume_getBarColumnDiv = () => {
	let div = null;
	if (useLeft) {
		div = resumeColumnDiv_left
	} else {
		div = resumeColumnDiv_left;
	};

	useLeft = !useLeft;
	return div;
};

const PORT_fnc_addBulletToResume = (resumeItem_ul, content) => {
	const li = document.createElement("li");
	li.textContent = content;
	resumeItem_ul.appendChild(li);
};

const PORT_fnc_resume_addResumeItem = (resumeItem) => {
	const columnDiv = PORT_fnc_resume_getBarColumnDiv();
	const resumeItem_div = document.createElement("div");
	const resumeItem_header = document.createElement("h5");
	const resumeItem_ul = document.createElement("ul");

};


