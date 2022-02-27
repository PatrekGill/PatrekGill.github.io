document.addEventListener("DOMContentLoaded", function (event) {
	
	PORT_fnc_sideBar_expand("sidebarToggleIcon_id", "sidebar_id", "body_id", "header_id");
	
	/*===== LINK sidebar-scroll-link-active =====*/
	const linkColor = document.querySelectorAll(".sidebar-scroll-links");
  	function colorLink() {
		if (linkColor) {
			linkColor.forEach((l) => l.classList.remove("sidebar-scroll-link-active"));
			this.classList.add("sidebar-scroll-link-active");
		}
 	}
  	linkColor.forEach(
		(l) => l.addEventListener("click", colorLink)
	);

});


/* ----------------------------------------------------------------------------
Function: PORT_fnc_sidebar_toggleProfilesDiv

Description:
	Adjusts the whehter or not the div in the sidebar that has the profile 
	 icons is shown or not.

Parameters:
	NONE

Returns:
	NOTHING
---------------------------------------------------------------------------- */
function PORT_fnc_sidebar_toggleProfilesDiv() {
	const profileDiv = document.getElementById("sidebar-profiles-div_id");
	profileDiv.classList.toggle("profile-links-shown");
}


/* ----------------------------------------------------------------------------
Function: PORT_fnc_sideBar_expand

Description:
	Fires on the click event of the sidebar menu (hamburger) click. Grows it and
	 changes the icon of the hamburger menu to the X.

Parameters:
	NONE

Returns:
	NOTHING
---------------------------------------------------------------------------- */
function PORT_fnc_sideBar_expand(toggleButtonId, sideBarId, bodyId, headerId) {

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
			toggleButton.classList.toggle("bi-x-lg");
			// add padding to body
			bodypd.classList.toggle("body-pd");
			// add padding to header
			headerpd.classList.toggle("body-pd");
			// show the profile icons (Github & LinkedIn)
			PORT_fnc_sidebar_toggleProfilesDiv();
		});
	}
}
