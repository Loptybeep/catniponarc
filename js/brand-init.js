/* Applies CATNIP_CONFIG links to any element tagged with
   data-catnip-link="<key>". Keeps config.js as the single
   source of truth for every external URL on the site. */
(function () {
  var cfg = window.CATNIP_CONFIG || {};

  var MAP = {
    buy:         cfg.ARC_CHAIN_BUY_URL,
    website:     cfg.ARC_CHAIN_WEBSITE_URL,
    explorer:    cfg.ARC_CHAIN_EXPLORER_URL,
    dexscreener: cfg.CATNIP_DEXSCREENER_URL,
    x:           cfg.CATNIP_X_URL,
    telegram:    cfg.CATNIP_TELEGRAM_URL,
    discord:     cfg.CATNIP_DISCORD_URL
  };

  function isPlaceholder(v) {
    return !v || v.indexOf("REPLACE_ME") === 0;
  }

  function apply() {
    var nodes = document.querySelectorAll("[data-catnip-link]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var url = MAP[el.getAttribute("data-catnip-link")];
      el.setAttribute("href", isPlaceholder(url) ? "#" : url);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", apply);
  } else {
    apply();
  }
})();
