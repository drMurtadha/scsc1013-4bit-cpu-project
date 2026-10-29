// Builds the site pages from the repo's Markdown files, which stay the single source of truth.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, rmSync } from 'node:fs';

const BASE = '/scsc1013-4bit-cpu-project';
const pages = [
  { src: 'README.md', slug: 'index', title: 'Overview' },
  { src: 'PROJECT_BRIEF.md', slug: 'brief', title: 'Project Brief' },
  { src: 'ISA_REFERENCE.md', slug: 'isa', title: 'ISA Reference' },
  { src: 'COURSE_MAP.md', slug: 'course-map', title: 'Course Map' },
  { src: 'RUBRIC.md', slug: 'rubric', title: 'Rubric' },
  { src: 'templates/REPORT_TEMPLATE.md', slug: 'report-template', title: 'Report Template' },
];
const csvs = ['trace_table.csv', 'memory_trace.csv'];

const routes = Object.fromEntries(
  pages.flatMap((p) => [[p.src, p.slug], [p.src.split('/').pop(), p.slug]]),
);
const rewrite = (md) =>
  md
    .replace(/\]\((?:templates\/)?([A-Za-z_]+\.md)\)/g, (m, f) =>
      routes[f] ? `](${BASE}/${routes[f] === 'index' ? '' : routes[f] + '/'})` : m)
    .replace(/\]\((?:templates\/)?([a-z_]+\.csv)\)/g, `](${BASE}/$1)`);

rmSync('src/pages', { recursive: true, force: true });
mkdirSync('src/pages', { recursive: true });
mkdirSync('public', { recursive: true });
for (const p of pages) {
  const body = rewrite(readFileSync(p.src, 'utf8'));
  writeFileSync(
    `src/pages/${p.slug}.md`,
    `---\nlayout: ../layouts/Doc.astro\ntitle: "${p.title}"\n---\n\n${body}`,
  );
}
for (const c of csvs) copyFileSync(`templates/${c}`, `public/${c}`);
