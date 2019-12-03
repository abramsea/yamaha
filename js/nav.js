menu.onclick = function openHiddenMenu() {
    var x = document.getElementById('topnav');

    if (x.className === "nav") {
        x.className += " responsive" ;
    } else {
        x.className = "nav";
    }

}