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
        var buttons = document.querySelectorAll(".theme button");
        if (!buttons.length) return;

        function apply(next) {
            document.documentElement.setAttribute("data-theme", next);
            try {
                localStorage.setItem(key, next);
            } catch (e) {}
            paintChrome();
            sync();
        }

        function sync() {
            var theme = current();
            for (var i = 0; i < buttons.length; i++) {
                var on = buttons[i].getAttribute("data-theme-choice") === theme;
                buttons[i].setAttribute("aria-pressed", on ? "true" : "false");
            }
        }

        sync();
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function (event) {
                apply(event.currentTarget.getAttribute("data-theme-choice"));
            });
        }

        matchMedia("(prefers-color-scheme: light)").addEventListener("change", function () {
            if (!document.documentElement.getAttribute("data-theme")) {
                sync();
            }
        });
    });
})();
