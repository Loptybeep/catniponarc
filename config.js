/* ============================================================
   KATNIP - CENTRAL BRAND & LINK CONFIGURATION
   ------------------------------------------------------------
   This is the single place to edit brand strings and external
   links. Change a value here and it is applied everywhere on the
   site automatically (see js/brand-init.js).

   Values marked REPLACE_ME are placeholders because the real
   destination is not known yet (e.g. the Katnip token has no
   contract / chart / socials at time of build). Swap them in
   when ready. Leaving them as-is renders the button/link inert
   (points to "#").
   ============================================================ */

window.KATNIP_CONFIG = {
  BRAND_NAME: "Katnip",

  /* --- Arc Chain (verified public destinations) --- */
  ARC_CHAIN_WEBSITE_URL:  "https://www.arc.io/",   // official Arc site
  ARC_CHAIN_EXPLORER_URL: "https://www.arc.io/",   // swap for the Arc block explorer when finalised

  /* --- Katnip token (placeholders - fill in when live) --- */
  ARC_CHAIN_BUY_URL:      "REPLACE_ME_KATNIP_BUY_URL",         // buy / trade Katnip
  KATNIP_DEXSCREENER_URL: "REPLACE_ME_KATNIP_DEXSCREENER_URL", // price chart

  /* --- Socials (placeholders - fill in when live) --- */
  KATNIP_X_URL:        "REPLACE_ME_KATNIP_X_URL",
  KATNIP_TELEGRAM_URL: "REPLACE_ME_KATNIP_TELEGRAM_URL",
  KATNIP_DISCORD_URL:  "REPLACE_ME_KATNIP_DISCORD_URL"
};
