<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Deployment

- GitHub Pages deploys through `.github/workflows/deploy.yml`: it builds with
  `GITHUB_PAGES=true` (sets Vite base `/aastha/`, router basepath `/aastha`,
  and prerenders every route) and publishes `.output/public`. Do not change
  the base config outside the `GITHUB_PAGES` flag — the Lovable build/preview
  must keep base `/` and the Cloudflare preset.
- Media (photo, Instagram screenshot, gym video) lives as real files in
  `src/assets/` and is bundled by Vite — do not switch back to `.asset.json`
  pointers, which only resolve on Lovable hosting.
