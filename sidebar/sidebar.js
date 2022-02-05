document.addEventListener("DOMContentLoaded", function (event) {
	const profileDiv = document.getElementById("sidebarProfilesDiv");
	profileDiv.style.display = "none";

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
				if (profileDiv.style.display === "none") {
					profileDiv.style.display = "block";
				} else {
					profileDiv.style.display = "none";
				}

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
