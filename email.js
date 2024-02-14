var shown = false;
function showHideEmail() {
	if(shown) {
		document.getElementById('email').innerHTML= "Show my email";
		shown = false;
	} else {
		var myEmail = "<a href='mailto:javvadsa" + "@" + "mail.uc.edu'>javvadsa" + "@" + "mail.uc.edu</a>";
		document.getElementById('email').innerHTML = myEmail;
		shown = true;
	}
}