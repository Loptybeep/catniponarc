/* ============================================================
   CATNIP - CENTRAL BRAND & LINK CONFIGURATION
   ------------------------------------------------------------
   This is the single place to edit brand strings and external
   links. Change a value here and it is applied everywhere on the
   site automatically (see js/brand-init.js).

   Values marked REPLACE_ME are placeholders because the real
   destination is not known yet (e.g. the Catnip token has no
   contract / chart / socials at time of build). Swap them in
   when ready. Leaving them as-is renders the button/link inert
   (points to "#").
   ============================================================ */

window.CATNIP_CONFIG = {
  BRAND_NAME: "Catnip",

  /* --- Arc Chain (verified public destinations) --- */
  ARC_CHAIN_WEBSITE_URL:  "https://www.arc.io/",   // official Arc site
  ARC_CHAIN_EXPLORER_URL: "https://www.arc.io/",   // swap for the Arc block explorer when finalised

  /* --- Catnip token (placeholders - fill in when live) --- */
  ARC_CHAIN_BUY_URL:      "REPLACE_ME_CATNIP_BUY_URL",         // buy / trade Catnip
  CATNIP_DEXSCREENER_URL: "REPLACE_ME_CATNIP_DEXSCREENER_URL", // price chart

  /* --- Socials (placeholders - fill in when live) --- */
  CATNIP_X_URL:        "REPLACE_ME_CATNIP_X_URL",
  CATNIP_TELEGRAM_URL: "REPLACE_ME_CATNIP_TELEGRAM_URL",
  CATNIP_DISCORD_URL:  "REPLACE_ME_CATNIP_DISCORD_URL"
};
