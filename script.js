const page = document.body
// beef.style.color = "#ffffff"

let darkmode = false

document.addEventListener("keydown", function(event) {
    console.log(event)
    if (event.keyCode==192) {
        if (darkmode == false) {
            page.style = "background-color: #606060; color: #ffffff;"
            darkmode = true
        }
        else {
            page.style = "background-color: revert; color: revert;"
            darkmode = false
        }
    }
})

document.getElementById("darkmode").addEventListener("click", function(event) {
	if (event) {
        if (darkmode == false) {
            darkmode = true;
            page.style = "background-color: #606060; color: #ffffff;";
            console.log("Darkmode Enabled");
            this.innerText = "Disable Darkmode";
        }
        else {
            darkmode = false;
            page.style = "background-color: revert; color: revert;";
            console.log("Darkmode Disabled");
            this.innerText = "Enable Darkmode";
        }
    }
});