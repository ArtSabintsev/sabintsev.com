(function () {
    var key = "sabintsev-theme";
    var colors = { dark: "#030303", light: "#fafafa" };
    var stored = null;
    try {
        stored = localStorage.getItem(key);
    } catch (e) {}
    if (stored === "light" || stored === "dark") {
        document.documentElement.setAttribute("data-theme", stored);
    }

    function current() {
        var theme = document.documentElement.getAttribute("data-theme");
        if (theme === "light" || theme === "dark") return theme;
        return matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }

    function paintChrome() {
        var locked = document.documentElement.getAttribute("data-theme");
        var theme = current();
        var metas = document.querySelectorAll('meta[name="theme-color"]');
        for (var i = 0; i < metas.length; i++) {
            if (locked) {
                metas[i].setAttribute("content", colors[theme]);
                metas[i].removeAttribute("media");
            }
        }
    }

    paintChrome();

    document.addEventListener("DOMContentLoaded", function () {
        var btn = document.getElementById("theme");
        if (!btn) return;

        function sync() {
            var to = current() === "dark" ? "light" : "dark";
            btn.textContent = to === "light" ? "Light" : "Dark";
            btn.setAttribute("aria-label", to === "light" ? "Switch to light mode" : "Switch to dark mode");
            btn.hidden = false;
        }

        sync();
        btn.addEventListener("click", function () {
            var next = current() === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", next);
            try {
                localStorage.setItem(key, next);
            } catch (e) {}
            paintChrome();
            sync();
        });

        matchMedia("(prefers-color-scheme: light)").addEventListener("change", function () {
            if (!document.documentElement.getAttribute("data-theme")) {
                sync();
            }
        });
    });
})();
