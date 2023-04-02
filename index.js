window.onload = function () {
    loadHTML("views/head.html", "header");
    loadHTML("views/nav/top-system.html", "system-top-nav");
    loadHTML("views/body/maingrid.html", "maingrid", true);
    loadHTML("views/scripts.html", "scripts");
};
function loadHTML(file, elementID, loadScript) {
    if (loadScript === void 0) { loadScript = false; }
    if (file && elementID) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var element = document.getElementById(elementID);
                if (element) {
                    element.innerHTML = this.responseText;
                    if (loadScript === true) {
                        var contentScript = element.querySelectorAll("script");
                        if (contentScript && contentScript.length != 0) {
                            for (var x = 0; x < contentScript.length; x++) {
                                var script = document.createElement("script");
                                script.textContent = contentScript[x].textContent;
                                document.body.appendChild(script);
                                console.log(contentScript[x].textContent);
                            }
                        }
                    }
                }
            }
        };
        xhttp.open("GET", file, true);
        xhttp.send();
    }
    else {
        console.log("ERROR - file or element ID are empty!");
    }
}
