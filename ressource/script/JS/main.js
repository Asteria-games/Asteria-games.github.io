window.onload = function () {
    let aether = document.getElementById("aether");
    let antte = document.getElementById("antte");
    let cerise = document.getElementById("cerise");
    let dark = document.getElementById("dark_knight");
    let machina = document.getElementById("machina");
    let panthere = document.getElementById("panthere");
    let ghost = document.getElementById("ghost");
    let bleiz = document.getElementById("bleiz");

    aether.addEventListener("click", () => {
        if (getComputedStyle(aether).display != "none") {
            aether.style.visibility = "hidden";
        }
    });

    antte.addEventListener("click", () => {
        if (getComputedStyle(antte).display != "none") {
            antte.style.visibility = "hidden";
        }
    });

    cerise.addEventListener("click", () => {
        if (getComputedStyle(cerise).display != "none") {
            cerise.style.visibility = "hidden";
        }
    });

    dark.addEventListener("click", () => {
        if (getComputedStyle(dark).display != "none") {
            dark.style.visibility = "hidden";
        }
    });

    machina.addEventListener("click", () => {
        if (getComputedStyle(machina).display != "none") {
            machina.style.visibility = "hidden";
        }
    });

    panthere.addEventListener("click", () => {
        if (getComputedStyle(panthere).display != "none") {
            panthere.style.visibility = "hidden";
        }
    });

    ghost.addEventListener("click", () => {
        if (getComputedStyle(aether).display != "none") {
            ghost.style.visibility = "hidden";
        }
    });
    bleiz.addEventListener("click", () => {
        if (getComputedStyle(bleiz).display != "none") {
            bleiz.style.visibility = "hidden";
        }
    })
}