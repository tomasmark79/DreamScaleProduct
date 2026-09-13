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
- Availability remains Coming soon until ordering details are confirmed.

Original website copy, design and supplied photography: all rights reserved. This website repository does not inherit the application's MIT license.

## Product scope

The initial paid product presents scale display without MIDI. MIDI response belongs to a later, separate paid Bitwig extension; Ableton is a possible future integration. Do not describe a generic standalone MIDI mode. Pricing tiers are undecided. Keep software descriptions general while the application is revised; do not publish click-by-click setup instructions. macOS remains expected, not verified.
