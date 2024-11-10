var togglebutton = document.getElementById("toggle-skills");
var skills = document.getElementById("skills");
togglebutton.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "blocK";
    }
    else {
        skills.style.display = "none";
    }
});
