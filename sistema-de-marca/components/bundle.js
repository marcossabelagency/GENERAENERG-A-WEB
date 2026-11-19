/* @ds-bundle: {"format":4,"namespace":"Genera","components":[{"name":"Button"},{"name":"Eyebrow"},{"name":"Card"},{"name":"Stack"},{"name":"MediaFrame"},{"name":"Stat"},{"name":"Field"},{"name":"Stepper"},{"name":"Reveal"}]} */
(function () {
  var reduce = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function countUp(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    if (isNaN(target)) return;
    var decimals = (el.getAttribute("data-count").split(".")[1] || "").length;
    var fmt = function (v) { return v.toLocaleString("es-ES", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }); };
    if (reduce) { el.textContent = fmt(target); return; }
    var start = null, dur = 1400;
    function step(t) {
      if (start === null) start = t;
      var p = Math.min((t - start) / dur, 1);
      var e = 1 - Math.pow(1 - p, 4);
      el.textContent = fmt(target * e);
      if (p < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  function show(el) {
    el.classList.add("is-visible");
    var counters = el.matches("[data-count]") ? [el] : el.querySelectorAll("[data-count]");
    Array.prototype.forEach.call(counters, countUp);
  }

  function reveal(root) {
    var els = (root || document).querySelectorAll(".g-reveal");
    if (reduce || !("IntersectionObserver" in window)) { Array.prototype.forEach.call(els, show); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { show(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });
    Array.prototype.forEach.call(els, function (el) { io.observe(el); });
  }

  function options(root) {
    var groups = (root || document).querySelectorAll(".g-options[data-single]");
    Array.prototype.forEach.call(groups, function (g) {
      g.addEventListener("click", function (ev) {
        var btn = ev.target.closest(".g-option");
        if (!btn || !g.contains(btn)) return;
        Array.prototype.forEach.call(g.querySelectorAll(".g-option"), function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
      });
    });
  }

  window.Genera = {
    reveal: reveal,
    countUp: countUp,
    options: options,
    init: function (root) { reveal(root); options(root); }
  };
})();
