# DreamScaler product website

An independent, English-language product presentation for DreamScaler. The website repository is separate from the private application repository. It contains original presentation code and a product photograph; no application source, firmware, or application Git history is copied here.

## Local preview

From this directory:

```powershell
python -m http.server 4173 --bind 127.0.0.1 --directory site
```

Open http://127.0.0.1:4173. No build step or package installation is needed.

## Publish with GitHub Pages

1. Create a new empty GitHub repository named `DreamScaleProduct`, without an initial README, license, or gitignore. Use a public repository for GitHub Pages on GitHub Free. Private repository Pages requires a supporting paid plan; the published website is still public.
2. Add the remote and publish from this directory (once a local initial commit has been created):

   ```powershell
   git remote add origin https://github.com/tomasmark79/DreamScaleProduct.git
   git push -u origin main
   ```

3. In the website repository, select **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Open **Actions → Deploy product website to GitHub Pages → Run workflow** if the first push happened before Pages was enabled.
5. After deployment succeeds, the expected project address is `https://tomasmark79.github.io/DreamScaleProduct/`.

Every subsequent push to `main` deploys `site/` only. Documentation, the original photograph, and Git metadata are not included in the Pages artifact. Relative asset URLs also work at a custom domain root.

See [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Custom domain later

Add the domain under **Settings → Pages → Custom domain**, configure the DNS records using GitHub's current instructions, and enable HTTPS when available. This custom Actions deployment does not require a CNAME file. Set canonical and absolute social sharing image URLs after the final public domain is known.

## Content and availability

- Brand: **DreamScaler**. The folder/repository name remains `DreamScaleProduct` as requested.
- Availability: **Coming soon**. No checkout, preorder, unconnected signup form, price, or contact address is presented.
- The existing demonstration is embedded in a responsive, lazy-loaded YouTube privacy-enhanced player (`youtube-nocookie.com`). Main video buttons scroll to this player; a direct YouTube fallback link is also provided: https://www.youtube.com/watch?v=vPi2TyJrofc.
- The product photograph is the supplied `IMG20260913161157.jpg`, copied to `site/assets/dreamscaler-kit.jpg`. The original is left locally and ignored by Git.
- The interactive piano is an independent browser illustration, with five example scales and optional synthesized audio. It does not connect to MIDI hardware or expose the private software.
- Compatibility wording describes existing KeyLab mappings; it does not promise universal keyboard support or announced shipping dates.
- Confirm final contents, supported operating systems, setup instructions, compatibility, pricing and availability before replacing Coming soon with an order link.
- Fonts are loaded from Google Fonts, with system fallbacks. No first-party analytics, tracking pixels, or personal-data collection form is implemented. The embedded player uses YouTube's privacy-enhanced domain; Google Fonts, YouTube and GitHub hosting receive resource requests. Review privacy information appropriate to your eventual business setup before taking orders.

## Files

- `site/index.html`: page content and metadata.
- `site/styles.css`: responsive layout, keyboard styling and reduced-motion support.
- `site/app.js`: scale illustration and opt-in audio.
- `site/assets/`: product photography and favicon.
- `.github/workflows/pages.yml`: GitHub Pages deployment.

All rights reserved for the original website copy, design, and supplied photography. This repository does not adopt the private application's MIT license.
