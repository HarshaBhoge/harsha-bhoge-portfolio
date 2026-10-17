/* Theme switcher: light / dark. Loaded in <head> so the saved theme applies before paint. */
(function () {
  var root = document.documentElement, KEY = "portfolio-theme-v2";

  function saved() {
  try { var s = localStorage.getItem(KEY); if (s) return s; } catch (e) {}
  return "light";   // default theme for first-time visitors
}

  function apply(t) {
    root.setAttribute("data-theme", t);
    var b = document.getElementById("theme-toggle");
    if (b) {
      b.textContent = t === "dark" ? "\u2600" : "\u263E";
      b.setAttribute("aria-label", "Switch to " + (t === "dark" ? "light" : "dark") + " theme");
    }
  }

  apply(saved());

  document.addEventListener("DOMContentLoaded", function () {
    apply(root.getAttribute("data-theme"));
    document.getElementById("theme-toggle").addEventListener("click", function () {
      var t = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      apply(t);
      try { localStorage.setItem(KEY, t); } catch (e) {}
    });
  });
})();