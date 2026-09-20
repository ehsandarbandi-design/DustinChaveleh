# Blog posts

One file per post, named by the post's slug (the last part of its URL): `content/blog/<slug>.mdx`.
The post must also be listed in `lib/copy.ts` (title, date, excerpt, cover image, tags) — the file
holds only the article body.

Write plain Markdown: paragraphs, `##` sub-headings, lists, links and images (`![alt](/images/blog/...)`).
Images render full-bleed; a title after the image URL becomes the caption. Tables use the Markdown pipe syntax
(a blank header row is hidden). An SF data portal map: `<Embed src="…" width={800} height={600} title="Map" />`.
Optional frontmatter is allowed. The existing posts were migrated from Squarespace with their images in
`public/images/blog/<slug>/`.
