let isLightTheme = true;

let toggleThemeBtn = document.getElementById("toggleThemeBtn");
let themeCssLink = document.getElementById("themeCssLink");

function toggleTheme() {

    if (isLightTheme) {

        toggleThemeBtn.innerHTML = "Set Theme to Light";
        themeCssLink.href = "dark-theme.css";
    }
    else {

        toggleThemeBtn.innerHTML = "Set Theme to Dark";
        themeCssLink.href = "light-theme.css";
    }

    isLightTheme = !isLightTheme;
}