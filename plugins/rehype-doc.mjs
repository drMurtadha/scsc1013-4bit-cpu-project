// Presentation-only transforms: the Markdown text is moved into semantic markup, never rewritten.
const isLabel = (n) =>
  n.type === 'element' && n.tagName === 'strong' && n.children.length === 1 &&
  n.children[0].type === 'text' && n.children[0].value.trim().endsWith(':');

const trimEdges = (nodes) => {
  const out = nodes.map((n) => (n.type === 'text' ? { ...n } : n));
  if (out[0]?.type === 'text') out[0].value = out[0].value.trimStart();
  const last = out.at(-1);
  if (last?.type === 'text') last.value = last.value.trimEnd();
  return out;
};

// <p><strong>Label:</strong> text<br><strong>Label:</strong> text</p> after the h1 -> <dl class="doc-meta">
const metadata = (tree) => {
  const kids = tree.children;
  const h1 = kids.findIndex((n) => n.type === 'element' && n.tagName === 'h1');
  if (h1 < 0) return;
  let i = h1 + 1;
  while (kids[i]?.type === 'text') i++;
  const p = kids[i];
  if (p?.tagName !== 'p' || !isLabel(p.children[0])) return;

  const rows = [];
  for (const node of p.children) {
    if (isLabel(node)) rows.push({ label: node, value: [] });
    else rows.at(-1).value.push(node);
  }
  const dl = {
    type: 'element', tagName: 'dl', properties: { className: ['doc-meta'] },
    children: rows.flatMap(({ label, value }) => [
      { type: 'element', tagName: 'dt', properties: {}, children: [{ type: 'text', value: label.children[0].value.trim() }] },
      { type: 'element', tagName: 'dd', properties: {}, children: trimEdges(value) },
    ]),
  };
  kids[i] = dl;
};

const addClass = (node, name) => {
  node.properties ??= {};
  node.properties.className = [...(node.properties.className ?? []), name];
};

const textOf = (n) => (n.type === 'text' ? n.value : (n.children ?? []).map(textOf).join(''));

// Paragraphs under the h2 with the given text get a class (until the next h2).
const tagSection = (tree, headingText, className, onlyFirstParagraph) => {
  let inside = false;
  for (const node of tree.children) {
    if (node.type !== 'element') continue;
    if (node.tagName === 'h2') { inside = textOf(node).trim() === headingText; continue; }
    if (!inside) continue;
    if (node.tagName === 'p') {
      addClass(node, className);
      if (onlyFirstParagraph) return;
    }
  }
};

export default function rehypeDoc() {
  return (tree) => {
    metadata(tree);
    tagSection(tree, 'The challenge in one sentence', 'key-statement', true);
    tagSection(tree, 'Acknowledgement', 'quiet', false);
  };
}
