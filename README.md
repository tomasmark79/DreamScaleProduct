# DreamScaler product website

An independent, English-language product presentation for DreamScaler. The website repository is separate from the private application repository. It contains original presentation code and a product photograph; no application source, firmware, or application Git history is copied here.

## Local preview

From this directory:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173. No build step or package installation is needed.

## Publish with GitHub Pages

The public repository is `https://github.com/tomasmark79/DreamScaleProduct`.

1. In **Settings → Pages → Build and deployment**, select **Deploy from a branch**, branch **main**, folder **/ (root)**. This is the configured publishing method; no custom Actions workflow is needed.
2. Commit changes and push from this directory:

   ```powershell
   git push -u origin main
   ```

3. GitHub's **pages build and deployment** workflow publishes the updated website automatically.
4. The public address is `https://tomasmark79.github.io/DreamScaleProduct/`.

The website files live at the repository root. `.nojekyll` disables Jekyll processing. Only commit files intended to be public: branch-based Pages publishes the repository's static content, including the README. The original photograph is ignored by Git; the selected published copy is under `assets/`. Relative asset URLs also work at a custom domain root.

See [GitHub Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Custom domain later

Add the domain under **Settings → Pages → Custom domain**, configure the DNS records using GitHub's current instructions, and enable HTTPS when available. GitHub will commit a root `CNAME` file for branch-based publishing; pull that commit before further local changes. Set canonical and absolute social sharing image URLs after the final domain is known.

## Content and availability

- Brand: **DreamScaler**. The folder/repository name remains `DreamScaleProduct` as requested.
- Availability: **Coming soon**. No checkout, preorder, unconnected signup form, price, or contact address is presented.
- The existing demonstration is embedded in a responsive, lazy-loaded YouTube privacy-enhanced player (`youtube-nocookie.com`). Main video buttons scroll to this player; a direct YouTube fallback link is also provided: https://www.youtube.com/watch?v=vPi2TyJrofc.
- The product photograph is the supplied `IMG20260913161157.jpg`, copied to `assets/dreamscaler-kit.jpg`. The original is left locally and ignored by Git.
- The illuminated keyboard photograph is the owner's cropped version of `IMG20260318195511.jpg`, saved as `assets/dreamscaler-in-action.png` (2109 × 404) and featured below the opening headline and buttons. Both original photographs remain local and ignored by Git.
- The interactive piano is an independent browser illustration, with five example scales and synthesized audio enabled by default. Audio initializes only when a visitor clicks or taps a piano key (or activates a focused key using the keyboard), and waits for the browser audio context to resume. The Sound button mutes or re-enables subsequent notes. It does not connect to MIDI hardware or expose the private software.
- Compatibility wording describes existing KeyLab mappings; it does not promise universal keyboard support or announced shipping dates.
- Confirm final contents, supported operating systems, setup instructions, compatibility, pricing and availability before replacing Coming soon with an order link.
- Fonts are loaded from Google Fonts, with system fallbacks. No first-party analytics, tracking pixels, or personal-data collection form is implemented. The embedded player uses YouTube's privacy-enhanced domain; Google Fonts, YouTube and GitHub hosting receive resource requests. Review privacy information appropriate to your eventual business setup before taking orders.

## Files

- `index.html`: page content and metadata.
- `styles.css`: responsive layout, keyboard styling and reduced-motion support.
- `app.js`: scale illustration and opt-in audio.
- `assets/`: product photography and favicon.
- `.nojekyll`: publish static files without Jekyll.

All rights reserved for the original website copy, design, and supplied photography. This repository does not adopt the private application's MIT license.
