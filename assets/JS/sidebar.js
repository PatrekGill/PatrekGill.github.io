document.addEventListener("DOMContentLoaded", function (event) {
	
	PORT_fnc_expandSideBar("sidebar-toggle-icon", "side-bar", "body-pd", "header");
	
	/*===== LINK ACTIVE =====*/
	const linkColor = document.querySelectorAll(".nav_link");
  	function colorLink() {
		if (linkColor) {
			linkColor.forEach((l) => l.classList.remove("active"));
			this.classList.add("active");
		}
 	}
  	linkColor.forEach(
		(l) => l.addEventListener("click", colorLink)
	);

});


/* ----------------------------------------------------------------------------
Function: PORT_fnc_toggleProfilesDiv

Description:
	Adjusts the whehter or not the div in the sidebar that has the profile 
	 icons is shown or not.

Parameters:
	NONE

Returns:
	NOTHING
---------------------------------------------------------------------------- */
function PORT_fnc_toggleProfilesDiv() {
	const profileDiv = document.getElementById("sidebar-profiles-div_id");
	profileDiv.classList.toggle("profile-links-shown");
}


/* ----------------------------------------------------------------------------
Function: PORT_fnc_expandSideBar

Description:
	Fires on the click event of the sidebar menu (hamburger) click. Grows it and
	 changes the icon of the hamburger menu to the X.

Parameters:
	NONE

Returns:
	NOTHING
---------------------------------------------------------------------------- */
function PORT_fnc_expandSideBar(toggleButtonId, sideBarId, bodyId, headerId) {

	const toggleButton = document.getElementById(toggleButtonId),
		sideBar = document.getElementById(sideBarId),
		bodypd = document.getElementById(bodyId),
		headerpd = document.getElementById(headerId);

	// Add event handler to the toggle button's parent (the a-tag the icon is in)
	if (toggleButton && sideBar && bodypd && headerpd) {
		toggleButton.parentElement.addEventListener("click", () => {
			// show sidebar
			sideBar.classList.toggle("show");
			// change icon
			toggleButton.classList.toggle("bi-x");
			// add padding to body
			bodypd.classList.toggle("body-pd");
			// add padding to header
			headerpd.classList.toggle("body-pd");
			// show the profile icons (Github & LinkedIn)
			PORT_fnc_toggleProfilesDiv();
		});
	}
}


// Enable Bootstrap popovers
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  	return new bootstrap.Popover(popoverTriggerEl)
})