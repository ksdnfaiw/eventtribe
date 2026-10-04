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

- Keep shared public-site chrome and reusable marketing sections in `src/components/site.tsx`; this keeps all sitemap pages visually and behaviorally consistent.
- Store public enquiries through `src/lib/enquiry.functions.ts` into Lovable Cloud; this provides validated durable storage without exposing privileged access.
- Keep the portable one-file website at `public/export/eventtribe-complete.html`; it provides a self-contained handoff without changing the routed production site.
