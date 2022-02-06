document.addEventListener("DOMContentLoaded", function (event) {
	const profileDiv = document.getElementById("sidebarProfilesDiv");
	// profileDiv.style.display = "none";

	function toggleProfilesDiv() {
		if (!profileDiv.classList.contains("profile-links-shown")) {
			// profileDiv.classList.remove("profile-links-hidden");
			profileDiv.classList.add("profile-links-shown");
		} else {
			profileDiv.classList.remove("profile-links-shown");
			// profileDiv.classList.add("profile-links-hidden");
		}
	}

  	const showNavbar = (toggleButtonId, sideBarId, bodyId, headerId) => {
    	const toggleButton = document.getElementById(toggleButtonId),
		sideBar = document.getElementById(sideBarId),
		bodypd = document.getElementById(bodyId),
		headerpd = document.getElementById(headerId);

		// Validate that all variables exist
		if (toggleButton && sideBar && bodypd && headerpd) {
			toggleButton.addEventListener("click", () => {
				// show sidebar
				sideBar.classList.toggle("show");

				toggleProfilesDiv();
				
				// change icon
				toggleButton.classList.toggle("bx-x");
				// add padding to body
				bodypd.classList.toggle("body-pd");
				// add padding to header
				headerpd.classList.toggle("body-pd");
			});
		}
  	};

  	showNavbar("header-toggle", "side-bar", "body-pd", "header");

  	/*===== LINK ACTIVE =====*/
  	const linkColor = document.querySelectorAll(".nav_link");

  	function colorLink() {
		if (linkColor) {
			linkColor.forEach((l) => l.classList.remove("active"));
			this.classList.add("active");
		}
 	}
  	linkColor.forEach((l) => l.addEventListener("click", colorLink));

  	// Your code to run since DOM is loaded and ready
});

function calculateCollapsedScale(item) {
	// The menu title can act as the marker for the collapsed state.
	const collapsed = item.getBoundingClientRect();
  
	// Whereas the menu as a whole (title plus items) can act as
	// a proxy for the expanded state.
	const expanded = menu.getBoundingClientRect();
	return {
	  x: collapsed.width / expanded.width,
	  y: collapsed.height / expanded.height
	};
}

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  	return new bootstrap.Popover(popoverTriggerEl)
})