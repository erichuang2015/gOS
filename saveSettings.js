function saveSetting(backgroundURL) {
    console.log(backgroundURL);
    localStorage.setItem("background", backgroundURL);
}

function loadSettings() {
    var savedBack = localStorage.getItem("background");
    document.getElementById("desktop").style.backgroundImage = "url('" + savedBack + "')";

}