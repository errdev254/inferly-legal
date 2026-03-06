import MarkdownIt from "markdown-it";

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true
});

export function renderMarkdown(markdown) {
  return md.render(markdown);
}
