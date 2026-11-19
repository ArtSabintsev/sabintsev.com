import "/writing/ui/segmented-control.js";

var key = "sabintsev-theme";
var colors = { dark: "#030303", light: "#fafafa" };

function storedTheme() {
    try {
        var stored = localStorage.getItem(key);
        if (stored === "light" || stored === "dark") return stored;
    } catch (e) {}
    return null;
}

function systemTheme() {
    return matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function paintChrome(theme) {
    var metas = document.querySelectorAll('meta[name="theme-color"]');
    for (var i = 0; i < metas.length; i++) {
        metas[i].setAttribute("content", colors[theme]);
        metas[i].removeAttribute("media");
    }
}

function apply(next) {
    document.documentElement.setAttribute("data-theme", next);
    try {
        localStorage.setItem(key, next);
    } catch (e) {}
    paintChrome(next);
}

var control = document.querySelector("ui-segmented-control");
if (control) {
    var locked = storedTheme();
    control.value = locked || systemTheme();

    control.addEventListener("valuechange", function (event) {
        var next = event.detail && event.detail.value;
        if (next !== "light" && next !== "dark") return;
        apply(next);
    });

    matchMedia("(prefers-color-scheme: light)").addEventListener("change", function () {
        if (storedTheme()) return;
        document.documentElement.removeAttribute("data-theme");
        control.value = systemTheme();
    });
}
