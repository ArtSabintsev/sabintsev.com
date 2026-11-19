(function () {
    var key = "sabintsev-theme";
    var colors = { dark: "#030303", light: "#fafafa" };
    var stored = null;
    try {
        stored = localStorage.getItem(key);
    } catch (e) {}
    if (stored === "light" || stored === "dark") {
        document.documentElement.setAttribute("data-theme", stored);
        var metas = document.querySelectorAll('meta[name="theme-color"]');
        for (var i = 0; i < metas.length; i++) {
            metas[i].setAttribute("content", colors[stored]);
            metas[i].removeAttribute("media");
        }
    }
})();
