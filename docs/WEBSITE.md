# Website maintenance

Static HTML, CSS and JavaScript. No build step or dependencies.

## Preview

From the repository root:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173.

## Publishing

GitHub Pages deploys branch **main**, folder **/ (root)**. Commit changes and run `git push origin main`. The standard Pages workflow handles deployment; `.nojekyll` disables Jekyll.

Live site: https://tomasmark79.github.io/DreamScaleProduct/

All committed content is public, including these notes. Keep application source and private business material in the separate private repository.

## Custom domain

Set the domain under **Settings → Pages**, configure DNS and enable HTTPS. Pull the CNAME commit created by GitHub before further edits. Update canonical and social-sharing URLs when the final domain is known.

[GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Assets and services

- Product photographs are in `assets/`. Original IMG files remain local and are ignored by Git. Update image paths and intrinsic dimensions when replacing photos.
- The keyboard preview is independent presentation code. It connects to neither MIDI hardware nor the private application.
- Fonts load from Google Fonts. The Bitwig prototype has an external YouTube link only; no player is embedded. No first-party analytics or signup form is implemented.
- Bundles cost 169 EUR (kit + standalone) and 269 EUR (kit + standalone + Bitwig MIDI feedback), excluding shipping. Buttons prepare an email inquiry to dreamscaler@digitalspace.name rather than taking immediate payment. The customer reviews and sends the message; the website does not submit or store it.
- Shipping from Czechia is offered only to Czechia, Slovakia, Hungary and Romania via Zasilkovna / Packeta. Confirm the delivery service, full price and expected dispatch time manually. After the customer accepts, send a PayPal.Me link using the agreed total in EUR to the TomasMark profile. Verify receipt in PayPal before dispatch. There is no automatic payment confirmation or fulfillment integration.
- Country scope was checked against https://www.zasilkovna.cz/mobilni-aplikace on 2026-09-14. Recheck supported destinations before expanding the list.

Original website copy, design and supplied photography: all rights reserved. This website repository does not inherit the application's MIT license.

## Product scope

Both bundles include standalone scale display without MIDI. The 269 EUR bundle adds the Bitwig extension for MIDI feedback. Ableton is a possible future integration. Do not describe a generic standalone MIDI mode. Keep software descriptions general while the application is revised; do not publish click-by-click setup instructions. macOS remains expected, not verified.
